import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';



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
                    src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
                    alt = '' />
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>Burger</p>
                        <p>Ksh 499</p>
                        <p className='text-gray-400'>Delicious burger in town</p>
                    </div>
                </div>
            </div>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {demo.map((item) => (
                    <div>
                        <p>{item.category}</p>
                        <FormGroup>
                            {item.ingredients.map((item)=>(
                                <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item}/>
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