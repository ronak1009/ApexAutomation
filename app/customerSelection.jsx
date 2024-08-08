import { View, Text,  TextInput, Button } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useState, useEffect} from 'react';

import {label, textinput, view_center} from '../constants/styles';

const data = {
    "Gujarat": {
        "Ahmedabad": {"ABC": ["ABC_P1", "ABC_P2"], "GAIL": ["GAIL_P1", "GAIL_P2", "GAIL_P3"]},
        "Vadodara": {"GAIL": ["GAIL_PQR", "GAIL_S", "GAIL_9"]},
        "Rajkot": {"ADANI": ["ADE_2", "ADE_7"], "Reliance": ["REL4", "REL5", "REL6", "REL7"]}
    },
    "Maharashtra": {
        "Mumbai": {"ABC": ["ABC_M1", "ABC_M2"], "GAIL": ["GAIL_M1", "GAIL_M2", "GAIL_M3"]},
        "Pune": {"ADANI": ["ADE_PNQ2", "ADE_PNQ7"], "Reliance": ["REL4_PNQ", "REL5_PNQ"]},
        "Nashik":  {"GAIL": ["GAIL_NSH_1", "GAIL_NSH_S", "GAIL_NSH_9"]},
    }
}

export default function customerSelection() {
    // current selection of project
    const [selectedState, setSelectedState] = useState(Object.keys(data));
    const [selectedCity, setSelectedCity] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);

    // dynamic properties
    // const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [projects, setProjects] = useState([]);

    const getStates =  () => {
        const s = Object.keys(data);
        let states = [];
        for (let i=0; i <s.length; i++) {
            states.push({label: s[i], value: i});
        }
        console.log('### states:', states);
        return states;
    };
    const updateCities = (statevalue) => {
        console.log('### updateCities:', statevalue);
        const cities = Object.keys(data[selectedState]);
        setCities(cities);
    };

    useEffect(() => {
        const customers = Object.keys(data[selectedState][city]);
        setCities(customers);
    }, [selectedCity]);
  return (
    <View style={view_center}>
        <Text style={label}>Select State</Text>
        <Dropdown 
        data={getStates()} 
        style={textinput}
        onChange={updateCities}></Dropdown>

        <Text style={label}>Select City</Text>
        <TextInput style={textinput}></TextInput>
        
        <Text style={label}>Select Customer</Text>
        <TextInput style={textinput}></TextInput>
        
        <Text style={label}>Select Project</Text>
        <TextInput style={textinput}></TextInput>

        <Button title="Submit" onPress={() => console.log('Submit')} />

    </View>
  )
}