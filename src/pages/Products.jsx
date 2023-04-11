import { Button } from "@mui/material";
import Typography  from "@mui/material/Typography";
import  { useEffect,useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const Products = () => {

   const {getStockData} = useStockCall()
   const {products} = useSelector((state)=> state.stock)
   const [open, setOpen] =useState(false);
     const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const columns = [
    { field: 'id', headerName: '#', minWidth: 60,headerAlign:"center",
    align:"center", },
    {
      field: 'category',
      headerName: ' Category',
      headerAlign:"center",
      align:"center",
      minWidth: 150,
      flex:3
    },
    {
      field: 'brand',
      headerName: 'Brand',
      headerAlign:"center",
      align:"center",
      minWidth: 150,
      flex:2
    },
    {
      field: 'name',
      headerName: 'Name',
      headerAlign:"center",
      align:"center",
      type: 'number',
      minWidth: 150,
      flex:2
    },
    {
      field: 'stock',
      headerName: 'Stock',
      headerAlign:"center",
      align:"center",
      minWidth: 100,
      flex:0.7
    },
    {
      field: 'action',
      headerName: 'Action',
      headerAlign:"center",
      align:"center",
      type: 'number',
      minWidth: 50,
      flex:1
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
 
  useEffect(() => {


    getStockData("products")
  }, []);



  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
       Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Product</Button>
     
     <ProductModal open={open} handleClose={handleClose} info={info} setInfo={info}/>




    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}

        disableRowSelectionOnClick
      />
    </Box>

       {/* <Grid container sx={flex}>
        {products?.map((product)=> (
          <Grid item key={product.id}>
            <ProductCard product={product} setOpen={setOpen} setInfo={setInfo} />

          </Grid>
            ))}
        </Grid> */}
    
    </div>
  );
};

export default Products;
