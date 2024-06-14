import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { APISchemas } from "types/api";
import { SurveysStatus, getSurveysStatus } from "./SurveyStatus";
import Button from "@codegouvfr/react-dsfr/Button";
import { GridColumnHeaderParams } from "@mui/x-data-grid";

const status = ["future", "closed", "opened"] as const;
export type Status = (typeof status)[number];

type Props = {
  surveys: APISchemas["MyQuestioningDto"][];
  t: TranslationFunction<"MySurveys", ComponentKey>;
  className?: string;
  columns: GridColDef[];
};

export const SurveysDatagrid = ({ surveys, t, className, columns }: Props) => {
  return (
    <DataGrid
      aria-labelledby="tableTitle"
      className={className}
      autoHeight
      rows={surveys.map((s, index) => {
        return {
          id: index,
          ...s,
        };
      })}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      sortingOrder={["asc", "desc"]}
      getRowHeight={() => "auto"}
      disableColumnMenu
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
      slotProps={{
        pagination: {
          labelDisplayedRows: page =>
            `${page.from}-${page.to === -1 ? page.count : page.to} ${t("on")} ${page.count} ${t("entities displayed")}`,
        },
      }}
    />
  );
};

const renderHeader = (params: GridColumnHeaderParams, ariaLabel: string) => {
  return (
    <th scope="col" aria-label={ariaLabel}>
      {params.colDef.headerName}
    </th>
  );
};

export const getColumns = (t: TranslationFunction<"MySurveys", ComponentKey>) => {
  const columns: GridColDef[] = [
    {
      field: "identificationCode",
      headerName: t("identifier"),
      minWidth: 110,
      flex: 0.4,
      renderHeader: params => {
        return renderHeader(params, t("identificationCode column"));
      },
    },
    {
      field: "surveyWording",
      headerName: t("survey name"),
      flex: 1,
      minWidth: 160,
      renderHeader: params => {
        return renderHeader(params, t("survey name column"));
      },
    },
    {
      field: "status",
      headerName: t("status"),
      minWidth: 190,
      flex: 0.4,
      renderCell: params => {
        const status = getSurveysStatus({
          openingDate: params.row.openingDate,
          closingDate: params.row.closingDate,
        });
        return SurveysStatus({ status: status, t });
      },
      renderHeader: params => {
        return renderHeader(params, t("status column"));
      },
    },
    {
      field: "closingDate",
      headerName: t("respond before"),
      minWidth: 100,
      flex: 0.4,
      renderHeader: params => {
        return (
          <th scope="col" aria-label={"respond before column"} style={{ width: "min-content" }}>
            {params.colDef.headerName}
          </th>
        );
      },
      renderCell: params => {
        return params.row.closingDate ? new Date(params.row.closingDate).toLocaleDateString() : "";
      },
    },
    {
      field: "actions",
      headerName: t("actions"),
      flex: 0.4,
      minWidth: 130,
      sortable: false,
      renderHeader: params => {
        return renderHeader(params, t("actions column"));
      },
      renderCell: params => {
        const surveyStatus = getSurveysStatus({
          openingDate: params.row.openingDate,
          closingDate: params.row.closingDate,
        });
        return (
          surveyStatus === status[2] && (
            <Button
              key={params.row.identificationCode}
              size="small"
              linkProps={{
                to: params.row.accessUrl,
              }}
            >
              {t("goToSurvey")}
            </Button>
          )
        );
      },
    },
  ];

  return columns;
};
