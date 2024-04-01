import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slices/userData";
import { useNavigate } from "react-router-dom";
import { Card} from 'antd';
import { Form, } from 'antd';

const GeUserData = () =>{
    const navigate = useNavigate();
  
    const state = useSelector(
        (state) => state.userDetails
      );
      
    const dispatch = useDispatch();


    
    const handleSubmit = (e) =>{
        dispatch(addUser({email:e.email , phone:e.phone , username:e.username}));
        navigate('/redirect');
    }

    const cardStyle = {
      width: '60%',
      margin: 'auto',
      marginTop: 50,
      padding: 20,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

 

    const validateEmail = async (_, value) => {
        if (!value) {
          throw new Error('Please input your email!');
        }
    
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          throw new Error('Please enter a valid email!');
        }
    
        const emailExists = await checkEmailExists(value);
        if (emailExists) {
          throw new Error('This email is already in use!');
        }
      };
    
      const checkEmailExists = async (email) => {
        const allSavedEmail = state.userDetails.map((item) => {return item.email});
        return new Promise((resolve) => {
          setTimeout(() => {
         
            resolve(allSavedEmail.includes(email));
          }, 1000); 
        });
      };


    const validatePhone = async (e ,value) => {
        if (!value) {
            throw new Error('Please input your Phone number!');
          }
      
          if (!/^\d{10}$/.test(value)) {
            throw new Error('Please enter a valid phone Number!');
          }
      
          const phoneExists = await checkPhoneExists(value);
          if (phoneExists) {
            throw new Error('This Phone Number is already in use!');
          }
      };

      const checkPhoneExists = async (phone) => {
        const allSavedPhone = state.userDetails.map((item) => {return item.phone});
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(allSavedPhone.includes(phone));
          }, 1000); 
        });
      };

    const validateUsername = async(e ,value) => {
        if (!value) {
            throw new Error('Please input your User name!');
          }
      
          const phoneExists = await checkUserNameExists(value);
          if (phoneExists) {
            throw new Error('This UserName is already in use!');
          }
      };

    const checkUserNameExists = async(username) =>{
        const allSavedUser = state.userDetails.map((item) => {return item.username});
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(allSavedUser.includes(username));
          }, 1000); 
        });
    }
  


return (
    <div>
 
 <Card style={cardStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Enter User Data</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        labelCol={{ span: 6 }} // Set label column span
        wrapperCol={{ span: 16 }} // Set wrap
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ validator: validateUsername }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ validator: validateEmail }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ validator: validatePhone }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item style={{ textAlign: 'center' , width:'100%' }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
)

}

export default  GeUserData;