import {
  Checkbox,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { filterSurveys, getSurveyStatus } from "core/functions";

export const SmartFilter = ({ mySurveys, setSurveyFiltered, setPage }) => {
  const [filter, setFilter] = useState("");
  const [selectedSurveysFilter, setSelectedSurveysFilter] = useState([]);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState([]);

  const statusOrder = ["Fermeture", "Ouverte", "A Venir", "Fermée"];
  const status = ["A Venir", "Ouverte", "Fermeture", "Fermée"];
  const questioningStatusOrder = ["VALINT", "VALPAP", "REFUSAL", "HC"];

  const sortByQuestioningStatusBySurveyStatusByReturnDate = (a, b) => {
    if (
      !questioningStatusOrder.includes(a.questioningStatus) &&
      questioningStatusOrder.includes(b.questioningStatus)
    ) {
      return -1;
    }
    if (
      questioningStatusOrder.includes(a.questioningStatus) &&
      !questioningStatusOrder.includes(b.questioningStatus)
    ) {
      return 1;
    }
    if (
      statusOrder.indexOf(getSurveyStatus(a.openingDate, a.closingDate, a.returnDate).status) <
      statusOrder.indexOf(getSurveyStatus(b.openingDate, b.closingDate, b.returnDate).status)
    ) {
      return -1;
    }
    if (
      statusOrder.indexOf(getSurveyStatus(b.openingDate, b.closingDate, b.returnDate).status) <
      statusOrder.indexOf(getSurveyStatus(a.openingDate, a.closingDate, a.returnDate).status)
    ) {
      return 1;
    }
    if (a.returnDate < b.returnDate) {
      return -1;
    }
    if (b.returnDate < a.returnDate) {
      return 1;
    }
    // a must be equal to b
    return 0;
  };
  const [surveysList] = useState(
    mySurveys
      .reduce((_, { surveyWording }) => {
        if (!_.includes(surveyWording)) return [..._, surveyWording];
        return _;
      }, [])
      .sort(sortByQuestioningStatusBySurveyStatusByReturnDate),
  );
  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const handleChangeFilterStatus = event => {
    const {
      target: { value },
    } = event;
    setSelectedStatusFilter(value);
  };

  const handleChangeFilterSurvey = event => {
    const {
      target: { value },
    } = event;
    setSelectedSurveysFilter(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };
  useEffect(() => {
    if (filter || selectedSurveysFilter || selectedStatusFilter) {
      const newSurveys = filterSurveys(
        [...mySurveys],
        filter,
        selectedSurveysFilter,
        selectedStatusFilter,
      );

      setSurveyFiltered(newSurveys);
      console.log(newSurveys);
      setPage(0);
    } else {
      setSurveyFiltered(mySurveys);
      console.log(mySurveys);
      setPage(0);
    }
  }, [filter, selectedSurveysFilter, selectedStatusFilter, mySurveys, setSurveyFiltered, setPage]);

  const removeSurvey = survey => {
    setSelectedSurveysFilter(selectedSurveysFilter.filter(s => s !== survey));
  };

  const removeStatus = status => {
    setSelectedStatusFilter(selectedStatusFilter.filter(st => st !== status));
  };

  return (
    <Box
      sx={{
        p: 1,
        marginTop: "15px",
        marginBottom: "5px",
      }}
    >
      <Grid container spacing={2} sx={{ marginTop: "15px" }}>
        <Grid item xs={4}>
          <FormControl fullWidth sx={{ backgroundColor: "white" }}>
            <InputLabel id="demo-multiple-chip-label">Enquêtes</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              variant="standard"
              label="Enquêtes"
              multiple
              value={selectedSurveysFilter}
              onChange={handleChangeFilterSurvey}
              input={<OutlinedInput id="select-multiple-chip" label="Enquêtes" />}
              renderValue={selected => selected.join(", ")}
            >
              {surveysList.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedSurveysFilter.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            {selectedSurveysFilter.map(value => (
              <Chip sx={{ m: 0.5 }} key={value} label={value} onDelete={() => removeSurvey(value)} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth sx={{ backgroundColor: "white" }}>
            <InputLabel id="demo-multiple-chip-label">Statut</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              variant="standard"
              label="Statut"
              multiple
              value={selectedStatusFilter}
              onChange={handleChangeFilterStatus}
              input={<OutlinedInput id="select-multiple-chip" label="Statut" />}
              renderValue={selected => selected.join(", ")}
            >
              {status.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedStatusFilter.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            {selectedStatusFilter.map(value => (
              <Chip sx={{ m: 0.5 }} key={value} label={value} onDelete={() => removeStatus(value)} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl
            fullWidth
            variant="standard"
            sx={{
              marginBottom: "15px",
              minWidth: "50%",
              backgroundColor: "white",
            }}
          >
            <TextField
              fullWidth
              id="filter"
              value={filter}
              label="Rechercher"
              placeholder="Filtrer par UE, enquêtes ...."
              onChange={handleChangeFilter}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
