import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native"
// import navigation react routing
import { useCallback, useState } from "react"
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../hook/useFetch'

const JobDetails = () => {
    // const params = get id of current page
    // const router = useRouter() 
    const {data, isLoading, error, refetch} = useFetch ('job-details', {
        // job_id: params.id
    })
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 
            
        </SafeAreaView>>
    )
}

export default JobDetails