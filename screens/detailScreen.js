import { View, Text, Button } from "react-native"

// details screen page
function DetailScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Deposit"
          onPress={() => navigation.navigate('Deposit')}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go Back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default DetailScreen