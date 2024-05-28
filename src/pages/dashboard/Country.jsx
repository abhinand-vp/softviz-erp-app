import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
  theme,
  Input,
  TabIndicator,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const Country = () => {
  const [addorList, setAddorList] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const schema = yup.object().shape({
    Country: yup.string().required("Country Name Required"),
    CountryCode: yup.string().required("Country code Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setAddorList(false);
    alert(JSON.stringify(data));
  };
  return (
    <ChakraProvider theme={theme}>
      <div className="country_table">
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Country</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Organisation*</FormLabel>
                <Select placeholder="Select one value only">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {addorList ? (
          <>
            <Tabs position="relative" variant="unstyled">
              <TabList>
                <Tab>English</Tab>
                <Tab>Hindi</Tab>
                <Tab>Arab</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <div className="signup_inputboxes">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="signup_inputboxes_inputdivs">
                        <div className="signup_inputboxes_inputdiv">
                          <p>Country*</p>
                          <Input
                            {...register("Country", { required: true })}
                            type="text"
                            variant="outline"

                            placeholder="Enter your country "
                          />
                          <p className="error_message">
                            {errors.Country?.message}
                          </p>
                        </div>
                        <div className="signup_inputboxes_inputdiv">
                          <p>Country Code*</p>
                          <Input
                            {...register("CountryCode", { required: true })}
                            variant="outline"
                            type="text"

                            placeholder="Enter your country code"
                          />
                          <p className="error_message">
                            {errors.CountryCode?.message}
                          </p>
                        </div>
                      </div>
                      <div className="signup_inputboxes_inputdiv">
                        <p>Description</p>
                        <Input
                          {...register("Countrydesc", { required: true })}
                          variant="outline"
                          type="text"

                          placeholder="Description (Maximum character 200)"
                        />
                      </div>
                      <div className="country_add_buttons">
                        <button className="country_add_buttons_edit">
                          Edit
                        </button>
                        <button type="submit">Save</button>
                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="signup_inputboxes">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="signup_inputboxes_inputdivs">
                        <div className="signup_inputboxes_inputdiv">
                          <p>देश*</p>
                          <Input
                            {...register("Country", { required: true })}
                            type="text"
                            variant="outline"

                            placeholder="अपना देश दर्ज करें"
                          />
                          <p className="error_message">
                            {errors.Country?.message}
                          </p>
                        </div>
                        <div className="signup_inputboxes_inputdiv">
                          <p>कंट्री कोड*</p>
                          <Input
                            {...register("CountryCode", { required: true })}
                            variant="outline"
                            type="text"

                            placeholder="अपना देश कोड दर्ज करें"
                          />
                          <p className="error_message">
                            {errors.CountryCode?.message}
                          </p>
                        </div>
                      </div>
                      <div className="signup_inputboxes_inputdiv">
                        <p>विवरण</p>
                        <Input
                          {...register("Countrydesc", { required: true })}
                          variant="outline"
                          type="text"

                          placeholder="विवरण (अधिकतम वर्ण 200)"
                        />
                      </div>
                      <div className="country_add_buttons">
                        <button className="country_add_buttons_edit">
                          Edit
                        </button>
                        <button type="submit">Save</button>
                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="signup_inputboxes">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="signup_inputboxes_inputdivs">
                        <div className="signup_inputboxes_inputdiv">
                          <p>دولة*</p>
                          <Input
                            {...register("Country", { required: true })}
                            type="text"
                            variant="outline"

                            placeholder="أدخل بلدك"
                          />
                          <p className="error_message">
                            {errors.Country?.message}
                          </p>
                        </div>
                        <div className="signup_inputboxes_inputdiv">
                          <p>الرقم الدولي*</p>
                          <Input
                            {...register("CountryCode", { required: true })}
                            variant="outline"
                            type="text"

                            placeholder="أدخل رمز بلدك"
                          />
                          <p className="error_message">
                            {errors.CountryCode?.message}
                          </p>
                        </div>
                      </div>
                      <div className="signup_inputboxes_inputdiv">
                        <p>وصف</p>
                        <Input
                          {...register("Countrydesc", { required: true })}
                          variant="outline"
                          type="text"

                          placeholder="الوصف (الحد الأقصى 200 حرف)"
                        />
                      </div>
                      <div className="country_add_buttons">
                        <button className="country_add_buttons_edit">
                          Edit
                        </button>
                        <button type="submit">Save</button>
                      </div>
                    </form>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        ) : (
          <>
            <h3>Country Details</h3>
            <table>
              <tr className="heading_border">
                <th>Sl.No</th>
                <th>Country</th>
                <th>Code</th>
                <th>Edit</th>
                <th>View</th>
              </tr>
              <tr>
                <td>1</td>
                <td>India</td>
                <td>IND</td>
                <td>
                  <img src="/icons/Create.svg" onClick={onOpen} alt="" />
                </td>
                <td>
                  <img src="/icons/Eye.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>AMaerica</td>
                <td>USA</td>
                <td>
                  <img src="/icons/Create.svg" alt="" onClick={onOpen} />
                </td>
                <td>
                  <img src="/icons/Eye.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>India</td>
                <td>IND</td>
                <td>
                  <img src="/icons/Create.svg" alt="" onClick={onOpen} />
                </td>
                <td>
                  <img src="/icons/Eye.svg" alt="" />
                </td>
              </tr>
            </table>
          </>
        )}
      </div>
    </ChakraProvider>
  );
};

export default Country;
