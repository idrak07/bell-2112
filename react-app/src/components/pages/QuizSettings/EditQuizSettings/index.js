
import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import CustomButton from '../../../../ui/CustomButton';
import AdminLayout from "../../../layouts/AdminLayout";
import EditQuizSettingsView from "./EditQuizSettingsView";

const EditQuizSettings = () => {
  const navigate = useNavigate();
  const [quizTitle, _] = useLocalStorage('editQuizTitle')

  return (
    <AdminLayout>
      <div style={{
        padding: '18px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography
            variant="h5"
            id="tableTitle"
            component="div"
          >
            Quiz: {quizTitle ?? ''}
          </Typography>
          <div>

          <CustomButton onClick={() => {navigate(-1)}} style={{
            padding: '8px 22px'
          }}>
               Back
          </CustomButton>
        </div>
        </div>
        
        <div style={{
            fontSize: '1.4rem',
            // borderBottom: '1px solid lightgrey',
            paddingBottom: '10px',
            borderBottom: '1px solid lightgrey',
            paddingBottom: '8px',
            marginBottom: '10px',
          }}></div>
        <EditQuizSettingsView />
      </div>
    </AdminLayout>
  )
};

export default EditQuizSettings;