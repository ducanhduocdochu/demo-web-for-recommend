// pages/home.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Avatar, Box, Button, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography } from "@mui/material";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { user_id } = router.query;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user_id) {
      const fetchRecommendedProducts = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:5000/recommend", {
            params: { user_id },
          });
          setProducts(response.data.recommended_products);
          setLoading(true);
        } catch (error) {
          console.error("Error fetching recommended products:", error);
        }
      };
      fetchRecommendedProducts();
    }
  }, [user_id]);

  const handleLogin = () => {
    router.push(`/`);
  };

  if (!user_id) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress size={200} />
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          onClick={handleLogin}
        >
          Login ??? Route to Login
        </Button>
      </Box>
    );
  }

  return (
    <div
      style={{ padding: "20px", backgroundClip: "#ffffff", height: "1000px" }}
    >
      <h1>Recommended Products for User {user_id}</h1>
      <ul>
        {!loading && (
          <div>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 300 }} style={{ marginTop: "20px" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
        )}

        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          {products.map((product, index) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`Product name with product_id = ${product}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      
                    </Typography>
                    {`Description with product_id = ${product}`}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </ul>
    </div>
  );
}
