import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from "@mui/icons-material/Edit"
import useStockCall from '../hooks/useStockCall';
import { btnStyle, flex } from '../styles/globalStyle';

export default function FirmCard({firm}) {
  const {deleteStockData} =useStockCall()
  return (
    <Card sx={{p:2, width:"300px",heigth:"400px",display:"flex",flexDirection:"column", justifyContent:"space-between",}}
    >
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{p:1, objectFit:"contain",height:"130px"}}
        image={firm?.image}
        title="firm-image"
      />
         <Typography variant="body2" color="text.secondary">
        Phone:{firm?.phone}
        </Typography>
      <CardActions sx={flex}>
       <EditIcon sx={btnStyle}/>
       <DeleteOutlineIcon sx={btnStyle} onClick={()=> deleteStockData("firm", firm.id)}/>
      </CardActions>
    </Card>
  );
}