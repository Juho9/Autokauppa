import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Addcar from './Addcar';
import Editcar from './Editcar';



export default function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => fetchData(), ([]));

    const fetchData = () => {
        fetch("https://carstockrest.herokuapp.com/cars")
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    }

    const deleteCar = (link) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
        fetch(link, {method: "DELETE"})
        .then(res => fetchData())
        .catch(err => console.error(err))
        setOpen(true);
        } 
    }

    const saveCar = (car) => {
        fetch("https://carstockrest.herokuapp.com/cars", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err));
    }


    const updateCar = (car, link) => {
        fetch(link, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err));
    }
    

    const columns = [
        {
            Header: "Brand",
            accessor: "brand"
        },
        {
            Header: "Model",
            accessor: "model"
        },
        {
            Header: "Color",
            accessor: "color"
        },
        {
            Header: "Fuel",
            accessor: "fuel"
        },
        {
            Header: "Year",
            accessor: "year"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            sortable: false,
            filterable: false,
            
            Cell: row => 
                <Editcar updateCar={updateCar} car={row.original} /> 
            
        },
        {
            sortable: false,
            filterable: false,
            
            accessor: "_links.self.href", 
            Cell: row => 
                <Button onClick={() => deleteCar(row.value)}
                        variant="outlined" size="small" 
                        startIcon={<DeleteIcon />} >Delete</Button>
        }
    ]

    return (
        <div>
            <Addcar saveCar={saveCar} />
            <ReactTable filterable={true} data={cars} columns={columns} />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message="Car deleted!" />
        </div>
    )
}