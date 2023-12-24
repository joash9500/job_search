import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View, SafeAreaView, Text } from 'react-native'
import axios from 'axios';

import { NearbyJobCard } from '../../components';
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const JobSearch = ({route, navigation}) => {
    const [searchResult, setSearchResult] = useState([])
    const [searchLoader, setSearchLoader] = useState(false)
    const [searchError, setSearchError] = useState(null)
    const [page, setPage] = useState(1)

    // get searchterm from the params passed into jobsearch screen...
    const search_term = route.params.search_term

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: { 
            'X-RapidAPI-Key': 'b9b017baf7msh1a2b13dfbe87bcep1bd9ccjsn4b16ad0f1800',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        // retrieve id of search
        params: {
            query: search_term, 
            page: page.toString()
        }
    };

    const handleSearch = async () => {
        setSearchLoader(true)
        setSearchResult([])

        try {
            const response = await axios.request(options)
            setSearchResult(response.data.data)
            
        } catch (error) {
            setSearchError(error)
            console.log('AN error occured')
        } finally {
            setSearchLoader(false)
        }
    }

    // hanle UI for page navigation (left and right arrows)
    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <FlatList
                data={searchResult}
                renderItem={({item}) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => navigation.navigate("JobDetails", {
                            job_id: item?.job_id
                        })}
                    />
                )}
                keyExtractor={item=> item.job_id}
                contentContainerStyle={{padding: SIZES.medium, rowGap: SIZES.medium}}
                ListHeaderComponent={() => (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{search_term}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </View>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default JobSearch