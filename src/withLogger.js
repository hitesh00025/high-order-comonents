import React, { useEffect, useState } from "react";

const withDataFetching = (WrappedComponent, url) => {
  return (props) => {
    console.log(props)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        fetch(url).then((res)=> res.json()).then((result) =>{
            setLoading(false);
            setData(result);
        })
        .catch((err)=>{
            setError(err);
            setLoading(false);
        })

    },[url])


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data!</p>;
    return <WrappedComponent data={data} {...props} />;
    
  };
};

export default withDataFetching;