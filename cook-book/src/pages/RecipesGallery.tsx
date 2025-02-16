import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { AccessTimeFilled, Star } from "@mui/icons-material";

import foodImage1 from "../assets/food-pics/1.png";
import foodImage2 from "../assets/food-pics/2.png";
import foodImage3 from "../assets/food-pics/3.png";
import foodImage4 from "../assets/food-pics/4.png";

import chefImage1 from "../assets/chefs/1.png";
import chefImage2 from "../assets/chefs/2.png";
import chefImage3 from "../assets/chefs/3.png";
import chefImage4 from "../assets/chefs/4.png";

interface Recipe {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  timeInMinutes: number;
  image: string;
  chef: {
    name: string;
    avatar: string;
  };
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Grilled Salmon with Vegetables",
    description: "Perfect grilled salmon with seasonal vegetables and herbs...",
    category: "Main Dish",
    rating: 4.8,
    timeInMinutes: 30,
    image: foodImage1,
    chef: {
      name: "Chef Mike",
      avatar: chefImage1,
    },
  },
  {
    id: 2,
    title: "Chocolate Berry Cake",
    description: "Rich chocolate cake topped with fresh seasonal berries...",
    category: "Dessert",
    rating: 4.9,
    timeInMinutes: 45,
    image: foodImage2,
    chef: {
      name: "Chef Sarah",
      avatar: chefImage2,
    },
  },
  {
    id: 3,
    title: "Fresh Pesto Pasta",
    description: "Homemade pasta with fresh basil pesto and pine nuts...",
    category: "Main Dish",
    rating: 4.7,
    timeInMinutes: 25,
    image: foodImage3,
    chef: {
      name: "Chef Alex",
      avatar: chefImage3,
    },
  },
  {
    id: 4,
    title: "Tropical Smoothie Bowl",
    description: "Fresh fruit smoothie topped with granola and coconut...",
    category: "Breakfast",
    rating: 4.6,
    timeInMinutes: 15,
    image: foodImage4,
    chef: {
      name: "Chef Emma",
      avatar: chefImage4,
    },
  },
];

export default function RecipeGallery() {
  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={3} key={recipe.id}>
          <Card sx={{ height: "100%", position: "relative" }}>
            <CardMedia
              component="img"
              height={200}
              image={recipe.image}
              alt={recipe.title}
            />

            {/* Time chip */}
            <Chip
              icon={<AccessTimeFilled sx={{ fontSize: 16 }} />}
              label={`${recipe.timeInMinutes} min`}
              size="small"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                "& .MuiChip-icon": {
                  color: "white",
                },
              }}
            />

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100% - 200px)",
              }}
            >
              {/* Category and Rating */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Chip label={recipe.category} size="small" />
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Star sx={{ fontSize: 16 }} />
                  <Typography variant="body2">{recipe.rating}</Typography>
                </Stack>
              </Stack>

              {/* Title and Description */}
              <Typography variant="h6" gutterBottom>
                {recipe.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {recipe.description}
              </Typography>

              {/* Spacer */}
              <Box sx={{ flexGrow: 1 }} />

              {/* Chef Info - now using Box */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Avatar
                  src={recipe.chef.avatar}
                  alt={recipe.chef.name}
                  sx={{ width: 24, height: 24, mr: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  by {recipe.chef.name}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
