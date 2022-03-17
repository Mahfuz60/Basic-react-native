import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import {} from 'react-native-web';

export default function About() {
  const handleButton = () => {
    alert('button click it!');
  };
  return (
    <View>
      <Text style={styles.text}>About Page</Text>
      <ScrollView>
        <Text style={styles.para}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid libero facilis temporibus, voluptate possimus officiis doloremque sequi
          harum minus modi? Perferendis ea eius asperiores laborum expedita! Rerum iusto quam aliquid eum dolore soluta corrupti, blanditiis
          distinctio assumenda voluptas totam. Eum in assumenda deleniti pariatur excepturi quis praesentium atque beatae tempora itaque vel explicabo
          repellendus maxime minus, saepe eligendi officiis nulla tenetur soluta perspiciatis labore dicta. Odio quidem eos illo eaque est?
          Cupiditate, officia pariatur. Necessitatibus ratione placeat fugit, molestiae officia tempore dignissimos, pariatur voluptas nisi,
          reprehenderit voluptatem veniam doloremque. Id adipisci minima voluptates quo cum nam! Accusantium minus nemo illum ipsam laudantium harum
          esse odit sint sunt cumque cupiditate, minima amet pariatur accusamus veniam nam perspiciatis dolore necessitatibus labore totam ea!
          Reiciendis velit, atque beatae labore veniam itaque deleniti et quas nisi rem nobis consequuntur consectetur sed asperiores numquam, tenetur
          eaque cum saepe culpa distinctio dolores dolore. Voluptatibus iste odit quidem earum non temporibus obcaecati? Quod hic laudantium,
          aspernatur consectetur voluptates adipisci suscipit temporibus aliquid distinctio et vitae quaerat. Corrupti tempora animi veniam tempore
          cumque error eveniet fuga nisi? Culpa repellendus assumenda amet illo id autem! Veritatis unde voluptates iusto soluta, tenetur nobis
          numquam, omnis doloremque ab, ullam modi dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae et laudantium
          tenetur facere porro obcaecati ullam nihil nesciunt hic vitae delectus, pariatur provident fuga sunt mollitia minima minus esse debitis
          commodi magni consequatur tempora est quae? Velit quos illo quibusdam voluptates commodi quis totam eveniet quam eligendi minus. Quo minima
          in ducimus accusamus enim possimus, eaque molestias, adipisci est aut tempore. Voluptatum, veritatis, minus dolorum ipsam soluta sequi, vero
          incidunt praesentium iusto eveniet asperiores ad illo eius consectetur amet deserunt! Dicta soluta modi eius sapiente repudiandae cum
          perferendis officia nisi corrupti incidunt itaque accusamus ducimus, expedita error maiores, debitis consectetur? Asperiores doloremque et
          quis molestias. Non vel officiis harum, architecto laudantium nemo eum veritatis ipsam recusandae, ut dolores eius dolore sunt, cum nisi
          fuga assumenda reiciendis modi commodi. Doloribus quam cum voluptates, enim reiciendis corrupti quasi fugit, repellendus eos quas
          perspiciatis. Aspernatur illo modi quo saepe ipsam facilis similique, totam vel assumenda quae neque adipisci nemo, dignissimos,
          consequuntur asperiores officiis quam vero sequi placeat. Omnis at fugit fugiat excepturi cum commodi voluptatem, beatae eos modi in eius!
          Deserunt facere quisquam corrupti sapiente magni quibusdam numquam. Rem ullam minus ea, culpa cumque consectetur tempora voluptates
          accusamus voluptatem velit temporibus odit.
        </Text>
      </ScrollView>
      <Button onPress={handleButton} style={styles.button} title='Show More'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  para: {
    fontSize: 20,
    padding: 3,
    backgroundColor: 'gray',
    color: 'white',
  },
  button: {
    margin: 20,
    backgroundColor: 'blue',
    textAlign: 'center',
  },
});
