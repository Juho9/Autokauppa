import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogContent';



export default function AddCar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleInputChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    const addCar = () => {
        props.saveCar(car);
        handleClose();
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} >
                Add new car
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="addcar-dialog" >
                <DialogTitle>New Car</DialogTitle>
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
                    <Button onClick={addCar} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}