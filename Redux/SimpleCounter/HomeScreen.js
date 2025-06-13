import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

const HomeScreen =() => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style = {{fontSize: 48, fontWeight: 'bold'}}>
                {count}
            </Text>
            <Text style = {{fontSize: 24, fontWeight: 400}}>
                Click these to increment or decrement.
            </Text>
            <Pressable style={{backgroundColor: '#10c1ff', margin: 10, paddingVertical: 15, paddingHorizontal: 12, borderRadius: 12}} onPress={() => dispatch(increment())}>
                <Text style={{color: 'white', fontSize: 18}}>Increase</Text>
            </Pressable>
            <Pressable style={{backgroundColor: '#ff3636', margin: 10, paddingVertical: 15, paddingHorizontal: 12, borderRadius: 12}} onPress={() => dispatch(decrement())}>
                <Text style={{color: 'white', fontSize: 18}}>Decrease</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#edf7ff' },
  count: { fontSize: 32, marginBottom: 20 },
});

export default HomeScreen;