import { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider, theme, Input, TabIndicator } from '@chakra-ui/react';
// import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Country = () => {
  const [edit, setEdit] = useState(false);
  const [addorList, setAddorList] = useState(true);

  const schema = yup.object().shape({
    Country: yup
      .string()
      .required("Country Name Required"),
    CountryCode: yup
      .string()
      .required("Country code Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setAddorList(false)
    alert(JSON.stringify(data));
  };
  return (
    <ChakraProvider theme={theme}>
      <div className='country_table'>
        {edit &&
          <h1>Modal</h1>
        }
        {addorList ?
          <>
            <Tabs position='relative' variant='unstyled'>
              <TabList>
                <Tab>English</Tab>
                <Tab>Hindi</Tab>
                <Tab>Arab</Tab>
              </TabList>
              <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
              <TabPanels>
                <TabPanel>
                  <div className="signup_inputboxes">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='signup_inputboxes_inputdivs'>
                        <div className='signup_inputboxes_inputdiv'>
                          <Input
                            {...register("Country", { required: true })}
                            label="Email"
                            type="text"
                            variant='outline'
                            width='180%'
                            placeholder='Country Name' />
                          <p className="error_message">{errors.Country?.message}</p>
                        </div>
                        <div className='signup_inputboxes_inputdiv'>
                        <Input
                          {...register("CountryCode", { required: true })}
                          variant='outline'
                          type="text"
                          width='180%'
                          placeholder='Country Code' />
                          <p className="error_message">{errors.CountryCode?.message}</p>
                        </div>
                      </div>
                      <div className='country_add_buttons'>
                        <button className='country_add_buttons_edit'>Edit</button>
                        <button type='submit'>Save</button>
                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
          :
          <>
            <h3>Country Details</h3>
            <table>
              <tr className='heading_border'>
                <th>sL.No</th>
                <th>Country</th>
                <th>Code</th>
                <th>Edit</th>
                <th>View</th>
              </tr>
              <tr>
                <td>1</td>
                <td>India</td>
                <td>IND</td>
                <td><img src="/public/icons/Create.svg" onClick={() => setEdit(!edit)} alt="" /></td>
                <td><img src="/public/icons/Eye.svg" alt="" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>AMaerica</td>
                <td>USA</td>
                <td><img src="/public/icons/Create.svg" alt="" /></td>
                <td><img src="/public/icons/Eye.svg" alt="" /></td>
              </tr>
              <tr>
                <td>3</td>
                <td>India</td>
                <td>IND</td>
                <td><img src="/public/icons/Create.svg" alt="" /></td>
                <td><img src="/public/icons/Eye.svg" alt="" /></td>
              </tr>
            </table>
          </>
        }
      </div>
    </ChakraProvider>
  )
}

export default Country