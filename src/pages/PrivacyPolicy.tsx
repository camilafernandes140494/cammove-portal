import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { getActiveTermsOfUse } from "../api/PrivacyPolicy/termsOfUse.api";
import { useQuery } from "@tanstack/react-query";

const PrivacyPolicy = () => {

  	const {
		data: termsOfUse,
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["getActiveTermsOfUse"],
		queryFn: () => getActiveTermsOfUse(),
	});

  return(
  <Box  m={4}>
    <Typography variant="h4" gutterBottom>
      {termsOfUse?.content.title}
    </Typography>
	

  {isLoading || isFetching ? (
								<>
									{Array.from({ length: 20 }).map((_, index) => (
										    <Skeleton variant="text" key={index}/>))}

								</>
							) : (
								<>
					
									{termsOfUse?.content.intro?.map(
										(paragraph: string, idx: number) => (
											<Typography key={`intro-${idx}`} style={{ marginTop: 8, marginBottom: 8 }}>
												{paragraph}
											</Typography>
										),
									)}
									{termsOfUse?.content.sections?.map(
										(section: any, idx: number) => (
											<Box key={`section-${idx}`} style={{ marginBottom: 16 }}>
												<Typography style={{ marginBottom: 6 }} variant="h6">
													{section.title}
												</Typography>
												{section.content.map((line: string, i: number) => (
													<Typography
														key={`content-${i}`}
														style={{ marginBottom: 4 }}
													>
														- {line}
													</Typography>
												))}
												<Divider />
											</Box>
										),
									)}
								</>
							)}
  </Box>
)};

export default PrivacyPolicy;
