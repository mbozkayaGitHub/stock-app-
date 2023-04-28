import { Button, } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography  from "@mui/material/Typography";
import  { useEffect,useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import {btnStyle} from "../styles/globalStyle"

const Products = () => {

   const {getStockData,getProCatBrand} = useStockCall()
   const {deleteStockData} = useStockCall()
   const {products} = useSelector((state)=> state.stock)
   const [open, setOpen] =useState(false);
     const [info, setInfo] = useState({
    category_id: "",
    brand_id: "",
    name: "",

  });
   const handleOpen = () => setOpen(true)
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
      flex:1,
      renderCell: ({id}) => {

        return (
         <GridActionsCellItem icon={<DeleteForeverIcon/>}  label="Delete" 
         sx={{btnStyle}}
          onClick={()=> deleteStockData("products",id)}/>
        )
    }
    }
  ];
  
  
 
  useEffect(() => {


    // getStockData("products")
    // getStockData("categories")
    // getStockData("brands")
   getProCatBrand()
  }, []);



  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
       Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Product</Button>
     
     <ProductModal open={open} handleClose={handleClose} info={info} setInfo={info}/>




    <Box sx={{ height: 400, width: '100%', marginTop:"1rem" }}>
      <DataGrid
        rows={products}
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
        slots={{toolbar: GridToolbar}}
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
