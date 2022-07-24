import React,{useState} from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Accordian = () => {
    const [expand,setExpand] = useState(false)
    const handleChange = (panel) => (e,isExpand) => {
        setExpand(isExpand ? panel : false)
    }

  return (
    <div className='accordian'>
      <Accordion expand={expand === 'panel1'} onChange={handleChange('panel1')} >
       <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1bh-content"
       id="panel1bh-header"
       >
       <Typography className="accordian__heading">Estimate your Shipping</Typography>
       <Typography className="accordian__secondaryHeading">Shipping to 91001</Typography>  
       </AccordionSummary>
       <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expand={expand === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="accordian__heading">Enter a Coupon Code</Typography>
          <Typography className="accordian__secondaryHeading">
          20% discount applied
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expand={expand === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="accordian__heading">Apply Gift Card</Typography>
          <Typography className="accordian__secondaryHeading">
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accordian;
