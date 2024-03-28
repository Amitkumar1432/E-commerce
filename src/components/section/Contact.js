import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import "../css/Contact.css"; // Import CSS file

const Contact = () => {
  return (
    <Box className="contact-info">
      <Typography variant="h4" align="center">
        Contact My Restaurant
      </Typography>
      <p align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio beatae
        ducimus magni nobis culpa praesentium velit expedita quae, corrupti,
        pariatur inventore laboriosam consectetur modi impedit error,
        repudiandae obcaecati doloribus.
      </p>
      <Box className="contact-table">
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell className="contact-header" align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon className="icon red" /> 1800-00-0000
                  (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon className="icon skyblue" />{" "}
                  amitkumar170121@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon className="icon green" /> 8825156054
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Contact;
