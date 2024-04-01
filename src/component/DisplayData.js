import { Button, Card, Select } from "antd";
import { Option } from "antd/es/mentions";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const DisplayData = () =>{

  const [selectedUser , setSelectedUser]=useState({email:'' , userName:'' , phone:'' , value:''})

    const state = useSelector(
        (state) => state.userDetails
      );
    const navigate = useNavigate();

      const handleChange = (e) =>{
      console.log(state.userDetails)
        const filteredData = state.userDetails.filter((item) => item.username === e);
        setSelectedUser({...selectedUser , email:filteredData[0].email , userName:filteredData[0].username , phone:filteredData[0].phone})
      }

      const handleNavigateToMainPage = () =>{
         navigate('/');
        }

        const cardStyle={
          margin:'auto',
          width:'100%',
          textAlign: 'center',
        }

      const displayUserDetailsStyle = {
        width: 400,
        margin: 'auto',
        marginTop: 50,
        padding: 20,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }
  


    
    return (
   <>
   {state.userDetails.length > 0 ?
   <Card style={cardStyle}>
     <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a user"
        optionFilterProp="children"
        onChange={handleChange}  
      >
        {state.userDetails.map((item)=>{
          return <Option key={item.userName} value={item.username}>{item.username}</Option>

        })}
       
      </Select></Card> : <>asdfsdf</>}
     <div>
     <Card style={displayUserDetailsStyle}>
      <Typography.Title level={4}>User Details</Typography.Title>
      <Typography.Paragraph>
        <strong>Name:</strong> {selectedUser.userName}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Email:</strong> {selectedUser.email}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Phone:</strong> {selectedUser.phone}
      </Typography.Paragraph>
      <Button onClick={handleNavigateToMainPage}>Go Back</Button>
    </Card>
     </div>
      </>

    )

}

export default DisplayData;