import intercept from '../intercept';

const getServer = (url, requestData) => {
  let Result;
  intercept.get(url, requestData).then((response) => {
    Result = response.data.content;
  });
  return Result;
};

const defProps = {
  getServer,
};

export default defProps;
