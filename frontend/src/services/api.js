import axios from 'axios';

// Set the default baseURL for the API
axios.defaults.baseURL = process.env.REACT_APP_API;

export const postSubscription = ({
  name,
  email,
  institute,
  education,
  position,
  occupation,
  interest,
  certificate,
}) => {
  const params = {
    name,
    email,
    institute,
    education,
    position,
    occupation,
    module_interest: interest,
    certificate,
  };

  return axios.post('/subscription/', params).then((res) => res);
};

export const getSubscriptions = () => {
  // Only considering participants that were activated:
  const params = { pageSize: 99999 };

  return axios
    .get('/subscription/', { params })
    .catch((err) => err)
    .then((res) => res.data);
};
