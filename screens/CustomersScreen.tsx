import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';

const CustomersScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tailwind("text-blue-500")}>CustomersScreen</Text>
    </SafeAreaView>
  )
}

export default CustomersScreen
