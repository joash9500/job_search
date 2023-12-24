import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native"
// import navigation react routing
import { useCallback, useState } from "react"
import {Company, JobAbout, JobFooter, JobTabs, Specifics} from '../../components';
import useFetch from "../../hook/useFetch";
import {COLORS, SIZES} from "../../constants"

const tabs = ["About", "Qualifications", "Responsibilities"]

const JobDetails = ({route}) => {
    
    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id: route.params.job_id
    })
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0])

    const onRefresh = () => {}

    const displayTabContent = () => {
        switch (activeTab) {
            case "Qualifications":
                // ?? operator returns the right hand value when the left hand is null or undefined.
                return (
                    <Specifics
                        title="Qualifications"
                        points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                    />)
            case "About":
                return (
                    <JobAbout
                        info={data[0].job_description ?? "No data provided"}
                    />
                ) 
            case "Responsibilities":
                return (
                    <Specifics
                        title='Responsibilities'
                        points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                    />)
            default:
                break;
        }
    }
  
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary}/>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : data.length === 0 ? (
                    <Text>No data</Text>
                ) : (
                    <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                        <Company
                            companyLogo = {data[0].employer_logo}
                            jobTitle = {data[0].job_title}
                            companyName = {data[0].employer_name}
                            location = {data[0].job_country}
                        />
                        <JobTabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        {displayTabContent()}
                    </View>
                )}
            </ScrollView>

            {/* note the footer is outside the scrollview so its out of scope and independent */}
            <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}/>

        </SafeAreaView>
    )
}

export default JobDetails