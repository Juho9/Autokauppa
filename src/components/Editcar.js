import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogContent';



export default function EditCar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
        console.log(props.car)
        setCar({
            brand: props.car.brand,
            model: props.car.model,
            color: props.car.color,
            fuel: props.car.fuel,
            year: props.car.year,
            price: props.car.price
        })
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleInputChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    const updateCar = () => {
        props.updateCar(car, props.car._links.car.href);
        handleClose();
    }


    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen} >
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="addcar-dialog" >
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        label="Brand:"
                        type="text"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        label="Model:"
                        type="text"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        label="Color:"
                        type="text"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        label="Fueltype:"
                        type="text"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        label="Year:"
                        type="number"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        label="Price:"
                        type="number"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" >
                        Cancel
                    </Button>
                    <Button onClick={updateCar} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}