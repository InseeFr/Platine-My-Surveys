import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { APISchemas } from "types/api";
import { SurveysStatus, getSurveysStatus } from "./SurveyStatus";
import { GridColumnHeaderParams, GridComparatorFn } from "@mui/x-data-grid";
import { ActionButton } from "./ActionButton";

export const status = ["unstarted", "closed", "opened"] as const;
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

const renderHeader = (
  params: GridColumnHeaderParams,
  ariaLabel: string,
  t: TranslationFunction<"MySurveys", ComponentKey>,
  isSortable: boolean = true,
) => {
  return (
    <div aria-label={ariaLabel}>
      {isSortable && (
        <p className="fr-sr-only">
          {t("sortable column")} {params.colDef.headerName}
        </p>
      )}
      {params.colDef.headerName}
    </div>
  );
};

export const getColumns = (t: TranslationFunction<"MySurveys", ComponentKey>) => {
  const statusSorting: GridComparatorFn<any> = (v1, v2) => {
    return t(v1).localeCompare(t(v2));
  };

  const columns: GridColDef[] = [
    {
      field: "identificationCode",
      headerName: t("identifier"),
      minWidth: 110,
      flex: 0.4,
      renderHeader: params => {
        return renderHeader(params, t("identificationCode column"), t);
      },
    },
    {
      field: "surveyWording",
      headerName: t("survey name"),
      flex: 1,
      minWidth: 160,
      renderHeader: params => {
        return renderHeader(params, t("survey name column"), t);
      },
    },
    {
      field: "status",
      headerName: t("status"),
      minWidth: 190,
      flex: 0.4,
      valueGetter: (_, row) =>
        getSurveysStatus({
          openingDate: row.openingDate,
          closingDate: row.closingDate,
          questioningStatus: row.questioningStatus,
        }),
      sortComparator: statusSorting,
      renderCell: params => {
        const status = getSurveysStatus({
          openingDate: params.row.openingDate,
          closingDate: params.row.closingDate,
          questioningStatus: params.row.questioningStatus,
        });
        return SurveysStatus({ status: status, t });
      },
      renderHeader: params => {
        return renderHeader(params, t("status column"), t);
      },
    },
    {
      field: "closingDate",
      headerName: t("respond before"),
      minWidth: 100,
      flex: 0.4,
      renderHeader: params => {
        return (
          <div aria-label={"respond before column"} style={{ width: "min-content" }}>
            <p className="fr-sr-only">
              {t("sortable column")} {params.colDef.headerName}
            </p>
            {params.colDef.headerName}
          </div>
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
      minWidth: 150,
      sortable: false,
      renderHeader: params => {
        return renderHeader(params, "actions column", t, false);
      },
      renderCell: params => {
        return (
          <ActionButton
            openingDate={params.row.openingDate}
            closingDate={params.row.closingDate}
            questioningStatus={params.row.questioningStatus}
            accessUrl={params.row.accessUrl}
            t={t}
          />
        );
      },
    },
  ];

  return columns;
};
