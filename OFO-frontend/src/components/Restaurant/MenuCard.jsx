import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { categorizeIngredients } from '../util/categorizeIngredients';



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

    const handleCheckBoxChange = (value) => {
        console.log("value")
    }

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
          <form>
            <div className='flex gap-5 flex-wrap'>
                {Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                    <div>
                    <p>{category}</p>
                        <FormGroup>
                            {categorizeIngredients(item.ingredients)[category].map((item)=>(
                                <FormControlLabel key={item.name}
                                control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item.name}/>
                            ))}
                        </FormGroup>
                    </div>
                ))}
            </div>

            <div className='pt-5'>
                <Button variant='contained' disabled={false} type='submit'>{true? "Add to Cart" : "Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard