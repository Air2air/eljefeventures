import React from "react";
import { Fade } from "@chakra-ui/react";
import RankHeader from "./RankHeader";
import RankRow from "./RankRow";

const RankDetail = () => {

  return (
    <>
      <Fade in offsetY="-100px" delay={0.05}>
        <RankHeader
          currentRank={5}
          previousRank={4}
          totalPlaces={21}
          portfolioTotalValue={12345667}
          portfolioTotalBasis={12365656}
          pctGain={0.02}
        />
      </Fade>
      <RankRow
        fundName="Air2air"
        fundBasis={22757243}
        fundValue={25757243}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="salmagundi"
        fundBasis={85746786}
        fundValue={94262355}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="laBoheme"
        fundBasis={4623524}
        fundValue={4746776}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="Roxy_Music"
        fundBasis={55354345}
        fundValue={56245245}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="Kubelschiff Industries"
        fundBasis={5560892}
        fundValue={5558499}
        bg="blue.200"
        isUser="true"
      />
      <RankRow
        fundName="HootOwl"
        fundBasis={14425675}
        fundValue={13643544}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="yankees_fan"
        fundBasis={32131232}
        fundValue={31745643}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="Night_Train_64"
        fundBasis={754878}
        fundValue={735578}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="HootOwl"
        fundBasis={14425675}
        fundValue={13643544}
        bg="gray.50"
        isUser="false"
      />
      <RankRow
        fundName="roper_JR"
        fundBasis={76446764}
        fundValue={71363566}
        bg="gray.50"
        isUser="false"
      />
    </>
  );
};

export default RankDetail;
