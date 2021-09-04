import React from "react";
import ReportRow from "./ReportRow";
import ReportHeader from "./ReportHeader";

const Report = () => {


  return (
    <>
        <ReportHeader
          currentRank={5}
          previousRank={4}
          totalPlaces={21}
          portfolioTotalValue={12345667}
          portfolioTotalBasis={12365656}
          pctGain={0.02}
        />
        <ReportRow
          fundName="Air2air"
          fundBasis={22757243}
          fundValue={25757243}
          bg="gray.50"
        />
        <ReportRow
          fundName="salmagundi"
          fundBasis={85746786}
          fundValue={94262355}
          bg="gray.50"
        />
        <ReportRow
          fundName="laBoheme"
          fundBasis={4623524}
          fundValue={4746776}
          bg="gray.50"
        />
        <ReportRow
          fundName="Roxy_Music"
          fundBasis={55354345}
          fundValue={56245245}
          bg="gray.50"
        />
        <ReportRow
          fundName="Kubelschiff Industries"
          fundBasis={5560892}
          fundValue={5558499}
          bg="blue.200"
        />
        <ReportRow
          fundName="HootOwl"
          fundBasis={14425675}
          fundValue={13643544}
          bg="gray.50"
        />
        <ReportRow
          fundName="yankees_fan"
          fundBasis={32131232}
          fundValue={31745643}
          bg="gray.50"
        />
        <ReportRow
          fundName="Night_Train_64"
          fundBasis={754878}
          fundValue={735578}
          bg="gray.50"
        />
        <ReportRow
          fundName="HootOwl"
          fundBasis={14425675}
          fundValue={13643544}
          bg="gray.50"
        />
        <ReportRow
          fundName="roper_JR"
          fundBasis={76446764}
          fundValue={71363566}
          bg="gray.50"
        />
    </>
  );
};

export default Report;
