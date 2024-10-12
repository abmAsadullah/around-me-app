import {useState} from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const List = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('1');
  

  return (
    <div>
      <FormControl style={{marginTop: '20px', minWidth: '150px', marginBottom: '30px'}}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)} style={{marginTop:'20px'}}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{marginTop: '20px', minWidth: '150px', marginBottom: '30px'}}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)} style={{marginTop:'20px'}}>
          <MenuItem value="1">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default List