import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfilePicker = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="profile-picker">
      <Avatar
        className="avatar"
        size={64}
        icon={<UserOutlined />}
        style={{ color: '#262626' }}
      />
    </div>
  );
};
export default ProfilePicker;
