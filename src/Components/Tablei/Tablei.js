import React, { useState ,Fragment} from "react";
import CreateIcon from '@mui/icons-material/Create';
import {
	Box, Button, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@mui/x-data-grid";
import '../../App.css'


const columns = [
	{ field: 'id', headerName: 'ID', width: 170 },
	{ field: 'Person_Location', headerName: 'PERSON_LOCATION', width: 170 },
	{ field: 'match_count', headerName: 'MATCH_COUNT', width: 170 },
	{ field: 'time_taken', headerName: 'TIME_TAKEN(s)', width: 170 },
	{ field: 'miles_travelled', headerName: 'MILES_TRAVELLED', width: 170 },
	{ field: 'fuel_used', headerName: 'FUEL_USED', width: 170 },
	{ field: 'number_vehicle', headerName: 'NUMBER_VEHICLE', width: 170 },
	{ field: 'registration_id', headerName: 'REGISTRATION_ID', width: 170 },
];

function MyExportButton() {
	return (
	  <GridToolbarContainer>
		<GridToolbarExport />
	  </GridToolbarContainer>
	);
}

function Tablei() {

	const [rows, setRows] = useState([
		{ 
			id: 1, 
			Person_Location: "", 
			match_count: "", 
			time_taken: "", 
			miles_travelled: "", 
			fuel_used: "", 
			number_vehicle: "", 
			registration_id: ""
		},
	]);

	const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, 
				Person_Location: "", 
				match_count: "", 
				time_taken: "", 
				miles_travelled: "", 
				fuel_used: "", 
				number_vehicle: "", 
				registration_id: ""
			},
		]);
		setEdit(true);
	};

	const handleEdit = (i) => {
		setEdit(!isEdit);
	};

	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	const handleConfirm = () => {
		setShowConfirm(true);
	};

	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	const handleNo = () => {
		setShowConfirm(false);
	};

	return (
		<div>
			<TableBody style={{ display: "flex", justifyContent: "center" }}>
				<Snackbar
					open={open}
					autoHideDuration={2000}
					onClose={handleClose}
					className='snackb'
				>  
					<Alert onClose={handleClose} severity="success">
					Record saved successfully!
					</Alert>
				</Snackbar>
				<Box margin={1}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							{isEdit ? (
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<Button onClick={handleAdd}>
								<AddBoxIcon onClick={handleAdd} />
								ADD
								</Button>
								{rows.length !== 0 ? (
									<div>
									{disable ? (
									<Button disabled align="right" onClick={handleSave}>
										<DoneIcon />
										SAVE
									</Button>
									) : (
									<Button align="right" onClick={handleSave}>
										<DoneIcon />
										SAVE
									</Button>
									)}
								</div>
								):null}
							</div>
							) : (
							<div>
								<Button onClick={handleAdd}>
								<AddBoxIcon onClick={handleAdd} />
								ADD
								</Button>
								<Button align="right" onClick={handleEdit}>
								<CreateIcon />
								EDIT
								</Button>
							</div>
							)}
						</div>
					</div>
					<TableRow align="center"></TableRow>

					<Table
					// className={classes.table}
					className="table"
					size="small"
					aria-label="a dense table"
					>
					<TableHead>
						<TableRow>
							<TableCell>Person_Location</TableCell>
							<TableCell>match_count</TableCell>
							<TableCell>{'time_taken(s)'}</TableCell>
							<TableCell>miles_travelled</TableCell>
							<TableCell>fuel_used</TableCell>
							<TableCell>number_vehicle</TableCell>
							<TableCell align="center">registration_id</TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
						<TableBody>
							{rows.map((row, i) => {
							return (
									<Fragment key={i}>
										{isEdit ? (
											<TableRow>
												<TableCell padding="none">
												<input
													value={row.Person_Location}
													name="Person_Location"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>
												<TableCell padding="none">
												<input
													value={row.match_count}
													name="match_count"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>
												<TableCell padding="none">
												<input
													value={row.time_taken}
													name="time_taken"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>
												<TableCell padding="none">
												<input
													value={row.miles_travelled}
													name="miles_travelled"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>
												<TableCell padding="none">
												<input
													value={row.fuel_used}
													name="fuel_used"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>
												<TableCell padding="none">
												<input
													value={row.number_vehicle}
													name="number_vehicle"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>
												<TableCell padding="none">
												<input
													value={row.registration_id}
													name="registration_id"
													onChange={(e) => handleInputChange(e, i)}
												/>
												</TableCell>

												<Button className="mr10" onClick={handleConfirm}>
													<ClearIcon />
												</Button>
											</TableRow>
										
										) : (
										<TableRow>
											<TableCell component="th" scope="row">
											{row.Person_Location}
											</TableCell>
											<TableCell component="th" scope="row">
											{row.match_count}
											</TableCell>
											<TableCell component="th" scope="row">
											{row.time_taken}
											</TableCell>
											<TableCell component="th" scope="row">
											{row.miles_travelled}
											</TableCell>
											<TableCell component="th" scope="row">
											{row.fuel_used}
											</TableCell>
											<TableCell component="th" scope="row">
											{row.number_vehicle}
											</TableCell>
											<TableCell component="th" scope="row" align="center">
											{row.registration_id}
											</TableCell>
											<TableCell
											component="th"
											scope="row"
											align="center"
											></TableCell>
											<Button className="mr10" onClick={handleConfirm}>
												<DeleteOutlineIcon />
											</Button>
										</TableRow>
										)}
										{showConfirm ? (
										
											<Dialog
											open={showConfirm}
											onClose={handleNo}
											aria-labelledby="alert-dialog-title"
											aria-describedby="alert-dialog-description"
											>
											<DialogTitle id="alert-dialog-title">
												{"Confirm Delete"}
												</DialogTitle>
												<DialogContent>
													<DialogContentText id="alert-dialog-description">
													Are you sure to delete
													</DialogContentText>
												</DialogContent>
												<DialogActions>
													<Button
													onClick={() => handleRemoveClick(i)}
													color="primary"
													autoFocus
													>
													Yes
													</Button>
													<Button
													onClick={handleNo}
													color="primary"
													autoFocus
													>
													No
													</Button>
												</DialogActions>
											</Dialog>
										
										): null}
									</Fragment>
								
								);
							})}
						</TableBody>
					</Table>
					
				</Box>
			</TableBody>

			<DataGrid rows={rows} columns={columns} 
				pageSize={5} 
				components={{
				Toolbar: MyExportButton,
				}}
      		/>
		</div>
	);
}

export default Tablei;
