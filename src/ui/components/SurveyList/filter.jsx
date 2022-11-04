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
import { filterSurveys } from "core/functions";
import { surveyDictionary } from "i18n";
import { status } from "core/filterConstants";
import { sortByQuestioningStatusBySurveyStatusByReturnDate } from "core/functions";

export const SmartFilter = ({ mySurveys, setSurveyFiltered, setPage }) => {
  const [filter, setFilter] = useState("");
  const [selectedSurveysFilter, setSelectedSurveysFilter] = useState([]);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState([]);

  const [surveysList] = useState(
    mySurveys
      .reduce((_, { surveyWording }) => {
        if (!_.includes(surveyWording)) return [..._, surveyWording];
        return _;
      }, [])
      .sort(),
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

      setSurveyFiltered(newSurveys.sort(sortByQuestioningStatusBySurveyStatusByReturnDate));

      setPage(0);
    } else {
      setSurveyFiltered(mySurveys.sort(sortByQuestioningStatusBySurveyStatusByReturnDate));
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
            <InputLabel id="demo-multiple-chip-label">{surveyDictionary.searchBySurveyName}</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              variant="standard"
              label={surveyDictionary.searchBySurveyName}
              multiple
              value={selectedSurveysFilter}
              onChange={handleChangeFilterSurvey}
              input={
                <OutlinedInput id="select-multiple-chip" label={surveyDictionary.searchBySurveys} />
              }
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
            <InputLabel id="demo-multiple-chip-status-label">
              {surveyDictionary.searchByStatus}
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-status-label"
              id="demo-multiple-chip-status"
              variant="standard"
              label={surveyDictionary.searchByStatus}
              multiple
              value={selectedStatusFilter}
              onChange={handleChangeFilterStatus}
              input={
                <OutlinedInput
                  id="select-multiple-chip-status"
                  label={surveyDictionary.searchByStatus}
                />
              }
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
              label={surveyDictionary.searchByStringLabel}
              placeholder={surveyDictionary.searchByStringPlaceholder}
              onChange={handleChangeFilter}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
