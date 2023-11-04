import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native"
// import navigation react routing
import { useCallback, useState } from "react"
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components';
import useFetch from "../../hook/useFetch";
import {COLORS} from "../../constants"

const JobDetails = ({route, navigation}) => {
    console.log('clicked')
    // const router = useRouter() 
    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id: route.params.job_id
    })
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 
            
        </SafeAreaView>
    )
}

export default JobDetails