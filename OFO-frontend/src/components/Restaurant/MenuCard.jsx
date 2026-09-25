import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { categorizeIngredients } from '../util/categorizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';



    const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"]
  },
  {
    category: "Protein",
    ingredients: ["Bacon strips", "Beef"]
  },
  {
    category: "Vegetables",
    ingredients: ["Tomatoes", "Kales"]
  },
  {
    category: "Legumes",
    ingredients: ["Beans", "Lentils"]
  },
  {
    category: "Herbs",
    ingredients: ["Basil"]
  },
  {
    category: "Spices",
    ingredients: ["Black pepper", "Royco cube"]
  }
];

const MenuCard = ({ item }) => {

    const [selectedIngredients, setSelectedIngredients] = useState([])
    const dispatch = useDispatch();

    const handleCheckBoxChange = (itemName) => {
        console.log("value", itemName)
        if(selectedIngredients.includes(itemName)){
        setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName));
      }else{
        setSelectedIngredients([...selectedIngredients, itemName]);
      }

    };

    const handleAddItemToCart = (e) => {
      e.preventDefault()
      const reqData = {
        token: localStorage.getItem("jwt"),
        cartItem: {
          foodId: item.id,
          quantity: 1,
          ingredients: selectedIngredients,
        }
      }
      dispatch(addItemToCart(reqData))
      console.log("req data", reqData)
    };



  return (
    <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${item}-panel1-content`}
          id={`${item}-panel1-header`}
        >
          <Typography component="span">
            <div className = 'lg:flex items-center justify-between'>
                <div className = 'lg:flex items-center lg:gap-5'>
                    <img className = 'w-[7rem] h-[7rem] rounded-lg object-cover'
                    src = {item.images[0]} 
                    alt = '' />
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>{item.name}</p>
                        <p>Ksh {item.price}</p>
                        <p className='text-gray-400'>{item.description}</p>
                    </div>
                </div>
            </div>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className='flex gap-5 flex-wrap'>
                {Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                    <div>
                    <p>{category}</p>
                        <FormGroup>
                            {categorizeIngredients(item.ingredients)[category].map((item)=>(
                                <FormControlLabel key={item.name}
                                control={<Checkbox onChange={()=>handleCheckBoxChange(item.name)}/>} label={item.name}/>
                            ))}
                        </FormGroup>
                    </div>
                ))}
            </div>

            <div className='pt-5'>
                <Button 
                variant='contained' disabled={false} type='submit'>
                  {true? "Add to Cart" : "Out of Stock"}
                </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard