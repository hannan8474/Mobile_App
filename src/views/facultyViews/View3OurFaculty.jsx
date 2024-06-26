import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const View3OurFaculty = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Discover a wealth of knowledge and wisdom in our online instructors, each equipped with a deep understanding of Islamic teachings. With a wealth of experience, they skillfully impart these lessons to students of various ages and backgrounds. Their passion for sharing this wisdom is palpable, fostering a profound connection between students and their faith.
            </Text>
            <Text style={styles.text}>
                We take great pride in our collaboration with a highly skilled and dedicated team of online educators. Their talent and passion are the cornerstone of our success, ensuring the delivery of unparalleled Islamic education to students around the globe. Join us on this enlightening journey of learning and connection.
            </Text>
        </View>
    )
}

export default View3OurFaculty

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
    },
})