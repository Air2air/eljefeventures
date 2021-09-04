import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";

import Report from "../../components/Report";

const ReportPage = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading my={4} size="md">
          My Ranking
        </Heading>
        <Box bg="gray.100" p={3}>
          <Report
            fundName="Air2air"
            fundBasis={22757243}
            fundValue={25757243}
          />
          <Report
            fundName="salmagundi"
            fundBasis={85746786}
            fundValue={94262355}
          />
          <Report fundName="laBoheme" fundBasis={4623524} fundValue={4746776} />
          <Report
            fundName="Roxy_Music"
            fundBasis={55354345}
            fundValue={56245245}
          />
          <Report
            fundName="yankees_fan"
            fundBasis={32131232}
            fundValue={31745643}
          />
          <Report
            fundName="Night_Train_64"
            fundBasis={754878}
            fundValue={735578}
          />

          <Report
            fundName="HootOwl"
            fundBasis={14425675}
            fundValue={13643544}
          />

          <Report
            fundName="roper_JR"
            fundBasis={76446764}
            fundValue={71363566}
          />
        </Box>
      </Container>
    </>
  );
};

export default ReportPage;
