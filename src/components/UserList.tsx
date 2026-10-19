import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface Product {
  id: string;
  title: string;
  price: number;
}

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default function UserList() {
  const [prods, setProds] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProds(data));
  }, []);

  return (
    <View>
      <Text>Fake Products</Text>
      <FlatList
        data={prods}
        renderItem={({ item }) => (
          <View style={{padding:10,marginTop:5,backgroundColor:'lightblue'}}>
            <Text>

                {item.id} - {item.title} 
                
            </Text>
                <Text>
                    Price : {item.price} <FontAwesome5 name="money-check-alt" size={24} color="white" />
                </Text>
                
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
