import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState, useEffect } from 'react';
import { router, Redirect } from 'expo-router';

import { label, textinput, view_center } from '../constants/styles';

const data = {
	"Gujarat": {
		"Ahmedabad": { "ABC": ["ABC_P1", "ABC_P2"], "GAIL": ["GAIL_P1", "GAIL_P2", "GAIL_P3"] },
		"Vadodara": { "GAIL": ["GAIL_PQR", "GAIL_S", "GAIL_9"] },
		"Rajkot": { "ADANI": ["ADE_2", "ADE_7"], "Reliance": ["REL4", "REL5", "REL6", "REL7"] }
	},
	"Maharashtra": {
		"Mumbai": { "ABC": ["ABC_M1", "ABC_M2"], "GAIL": ["GAIL_M1", "GAIL_M2", "GAIL_M3"] },
		"Pune": { "ADANI": ["ADE_PNQ2", "ADE_PNQ7"], "Reliance": ["REL4_PNQ", "REL5_PNQ"] },
		"Nashik": { "GAIL": ["GAIL_NSH_1", "GAIL_NSH_S", "GAIL_NSH_9"] },
	}
}

const dropDownStyle = { ...textinput, width: 300 }

export default function customerSelection() {
	// current selection of project
	const [selectedState, setSelectedState] = useState("");
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedCustomer, setSelectedCustomer] = useState("");
	const [selectedProject, setSelectedProject] = useState("");

	// dynamic properties
	// const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [customers, setCustomers] = useState([]);
	const [projects, setProjects] = useState([]);

	// state of button
	const [saveButtonState, setSaveButtonState] = useState(true);

	const getStates = () => {
		const s = Object.keys(data);
		let states = [];
		for (let i = 0; i < s.length; i++) {
			states.push({ label: s[i], value: i });
		}
		console.log('### states:', states);
		return states;
	};
	const stateSelectionChanged = (statevalue) => {
		console.log('### updateCities:', statevalue);
		setSelectedState(statevalue.label);
		let c = []
		const cs = Object.keys(data[statevalue.label]);
		for (let i = 0; i < cs.length; i++) {
			c.push({ label: cs[i], value: i })
		};
		console.log('### updateCities:', c);
		setCities(c);
		setSelectedCity("");
		setSelectedCustomer("");
		setSelectedProject("");
		setCustomers([]);
		setProjects([]);
	};

	const citySelectionChanged = (cityvalue) => {
		console.log('### updateCustomers:', cityvalue);
		setSelectedCity(cityvalue.label);
		let cs = []
		const cst = Object.keys(data[selectedState][cityvalue.label]);
		for (let i = 0; i < cst.length; i++) {
			cs.push({ label: cst[i], value: i })
		};
		console.log('### updateCustomers:', cs);
		setSelectedCustomer("");
		setSelectedProject("");
		setProjects([]);
		setCustomers(cs);
	};

	const customerSelectionChanged = (customervalue) => {
		console.log('### updateCustomers:', customervalue);
		setSelectedCustomer(customervalue.label);
		let prjs = [];
		const prjsList = data[selectedState][selectedCity][customervalue.label];
		for (let i = 0; i < prjsList.length; i++) {
			prjs.push({ label: prjsList[i], value: i });
		}
		console.log('### updateProjects:', prjs);
		setSelectedProject("");
		setProjects(prjs);
	};

	const projectSelectionChanged = (projectvalue) => {
		console.log('### updateProjects:', projectvalue);
		setSelectedProject(projectvalue.label);
	};

	const saveCustomerSelection = () => {
		global.selectedCustomer = {
			state: selectedState,
      city: selectedCity,
      customer: selectedCustomer,
      project: selectedProject,
		}

		// <Redirect href = { '/dashboard'} />
		router.replace('/details/dashboard');

	}

	// Update the state of save button
	useEffect(() => {
		if (selectedState !== "" && selectedCity !== "" && selectedCustomer !== "" && selectedProject !== "")
		{
			setSaveButtonState(false);
		} else {
			setSaveButtonState(true);
		}
	}, [selectedCity, selectedState, selectedCustomer, selectedProject])

	return (
		<View style={view_center}>
			<Text style={label}>Select State</Text>
			<Dropdown
				data={getStates()}
				placeholder={selectedState == "" ? "-- Select -- " : selectedState}
				style={dropDownStyle}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				searchPlaceholder="Search..."
				value={selectedState}
				onChange={stateSelectionChanged}
			></Dropdown>

			<Text style={label}>Select City</Text>
			<Dropdown
				data={cities}
				placeholder={selectedCity == "" ? "-- Select -- " : selectedCity}
				style={dropDownStyle}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				searchPlaceholder="Search..."
				onChange={citySelectionChanged}
			></Dropdown>

			<Text style={label}>Select Customer</Text>
			<Dropdown
				data={customers}
				placeholder={selectedCustomer == "" ? "-- Select -- " : selectedCustomer}
				style={dropDownStyle}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				searchPlaceholder="Search..."
				onChange={customerSelectionChanged}
			></Dropdown>

			<Text style={label}>Select Project</Text>
			<Dropdown
				data={projects}
				placeholder="-- Select -- "
				style={dropDownStyle}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				searchPlaceholder="Search..."
				onChange={projectSelectionChanged}
			></Dropdown>

			<Button disabled={saveButtonState} title="Submit" onPress={saveCustomerSelection} />

		</View>
	)
}