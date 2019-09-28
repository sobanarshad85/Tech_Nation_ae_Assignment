//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    SafeAreaView,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import colors from '../../config/colors';
import Search from 'react-native-search-box';
import RequestHelper from '../../config/requesHelper';
import { bannersUrl, get, eventsUrl } from './res';
import Icon from '../../components/icons';
import StarRating from '../../components/ratingStar';

// create a component
class Home extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            unTruncateText: null,
            events: []
        }
    }

    searchProduct = async (text) => {
        console.warn('product searching');

    }

    componentDidMount() {
        this.getEventsFromBackend();
    }

    getEventsFromBackend = async () => {
        const url = eventsUrl;
        const method = get;
        const token = '';
        const response = await RequestHelper.requestWithoutBody(url, method, token);
        if (response.status === 1) {
            this.setState({ events: response.events, loading: false })
        }

    }

    render() {

        const { loading, events, unTruncateText } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <ScrollView> */}
                {
                    loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator color={colors.red} size='large' />
                        </View>
                        :
                        <View style={{}}>
                            <TextInput
                                placeholder='What is in your mood?'
                                style={{ minHeight: 50, borderColor: colors.gray, borderWidth: 1 }}
                            />

                            <Banner />

                            <View style={{ backgroundColor: colors.ThemeGray, paddingBottom: 430 }}>
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, }}>Events</Text>
                                </View>

                                <FlatList
                                    data={events}
                                    renderItem={({ item }) => {
                                        return (

                                            <View style={{ width: '50%', marginBottom: 30 }}>
                                                <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: colors.gray, backgroundColor: colors.white }}>
                                                    <View style={{ height: 40, flex: 1, paddingHorizontal: 10, flexDirection: 'row' }}>
                                                        <View style={{ justifyContent: 'center', flex: 2 }}>
                                                            <Text>{item.title}</Text>
                                                        </View>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            <Icon type='Feather' name='more-vertical' color={colors.gray} size={22} />
                                                        </View>

                                                    </View>
                                                    <View style={{ height: 1, backgroundColor: colors.gray, width: '100%' }}></View>
                                                    <TouchableWithoutFeedback onPress={() => {
                                                        let events = this.state.events;
                                                        events[item.id - 1].img = true;
                                                        this.setState({ events })
                                                    }}>
                                                        <View style={{ position: 'absolute', zIndex: 1, marginLeft: '83%', marginTop: 50, backgroundColor: 'white', alignItems: 'flex-end', opacity: 0.7 }}>
                                                            {!item.img && <Icon type='FontAwesome' name='heart' color={colors.black} size={25} />}
                                                            {item.img && <Icon type='FontAwesome' name='heart' color={colors.red} size={25} />}
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                    <Image
                                                        style={{ width: '100%', height: 180 }}
                                                        source={{ uri: item.image }}
                                                        resizeMode='contain'
                                                    />
                                                    <View style={{ height: 1, backgroundColor: colors.gray, width: '100%' }}></View>
                                                    <View style={{ margin: 10 }}>

                                                        <Text style={{ fontWeight: 'bold', color: colors.red }}>{item.title}</Text>
                                                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                                            <View style={{ flex: 1 }}>
                                                                <Text style={{ color: colors.black, fontSize: 12, fontWeight: 'bold' }}>{item.id * 0.50}% Off</Text>
                                                            </View>
                                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                                <Text style={{ color: colors.black, fontSize: 12, fontWeight: 'bold' }}>AED {item.id * 50}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                                            <View style={{ flex: 1 }}>
                                                                <Text style={{ color: colors.black, fontSize: 12 }}>Stock: {item.id * 10}</Text>
                                                            </View>
                                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                                <StarRating value={item.id} size={15} color={colors.red} />
                                                            </View>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                                            <View style={{ flex: 1 }}>
                                                                <TouchableWithoutFeedback onPress={() => {
                                                                    unTruncateText === item.id ?
                                                                        this.setState({ unTruncateText: null })
                                                                        :
                                                                        this.setState({ unTruncateText: item.id })
                                                                }
                                                                }>
                                                                    {unTruncateText === item.id ?
                                                                        <Text style={{ color: colors.black, fontSize: 12 }}>{item.description}</Text>
                                                                        :
                                                                        <Text ellipsizeMode='tail' numberOfLines={2} style={{ color: colors.black, fontSize: 12 }}>{item.description}</Text>}
                                                                </TouchableWithoutFeedback>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ height: 1, backgroundColor: colors.gray, width: '100%' }}></View>
                                                    <View style={{ height: 40, flex: 1, flexDirection: 'row' }}>
                                                        <TouchableWithoutFeedback onPress={() => {
                                                            let events = this.state.events;
                                                            events[item.id - 1].fav = true;
                                                            this.setState({ events })
                                                        }}>
                                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                                {!item.fav && <Icon type='EvilIcons' name='heart' color={colors.gray} size={35} />}
                                                                {item.fav && <Icon type='EvilIcons' name='heart' color={colors.red} size={35} />
                                                                }
                                                            </View>
                                                        </TouchableWithoutFeedback>
                                                        <View style={{ height: 40, backgroundColor: colors.gray, width: 1 }}></View>
                                                        <TouchableWithoutFeedback onPress={() => {
                                                            let events = this.state.events;
                                                            events[item.id - 1].cmnt = true;
                                                            this.setState({ events })
                                                        }}>
                                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                                {!item.cmnt && <Icon type='EvilIcons' name='comment' color={colors.gray} size={35} />}
                                                                {item.cmnt && <Icon type='EvilIcons' name='comment' color={colors.red} size={35} />}
                                                            </View>
                                                        </TouchableWithoutFeedback>
                                                        <View style={{ height: 40, backgroundColor: colors.gray, width: 1 }}></View>
                                                        <TouchableWithoutFeedback onPress={() => {
                                                            let events = this.state.events;
                                                            events[item.id - 1].shr = true;
                                                            this.setState({ events })
                                                        }}>
                                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                                {!item.shr && <Icon type='EvilIcons' name='share-google' color={colors.gray} size={35} />}
                                                                {item.shr && <Icon type='EvilIcons' name='share-google' color={colors.red} size={35} />}
                                                            </View>
                                                        </TouchableWithoutFeedback>
                                                    </View>
                                                </View>
                                            </View>

                                        )
                                    }}
                                    keyExtractor={item => item.id}
                                    numColumns={2}
                                />
                            </View>

                        </View>

                }
                {/* </ScrollView> */}
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Banner extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            banners: null,
            bannerBand: 1,
            show: false,
        }
    }

    componentDidMount() {
        this.getBannersFromBackend();
    }

    getBannersFromBackend = async () => {
        const url = bannersUrl;
        const method = get;
        const token = '';
        const response = await RequestHelper.requestWithoutBody(url, method, token);
        if (response.status === 1) {
            this.setState({ banners: response.banners, loading: false })
        }

    }

    render() {
        const { loading, banners, bannerBand } = this.state;
        return (
            loading ?
                <ActivityIndicator color={colors.red} size='large' />
                :
                <View>
                    <View>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16, }}>Banners</Text>
                    </View>
                    <ScrollView
                        horizontal={true}>
                        {banners.map((item, index) => {
                            const { banner, title, id } = item;
                            return (
                                <View style={{ margin: 10, marginBottom: 0 }} key={index} >
                                    <TouchableWithoutFeedback onPress={() => this.setState({ bannerBand: id, show: true })}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 50, height: 50, borderRadius: 25, borderColor: colors.red, borderWidth: 1 }}
                                                source={{ uri: banner }}
                                            />
                                            <View>
                                                <Text style={{ textAlign: 'center', fontSize: 13, marginTop: 5 }}>{title}</Text>
                                            </View>
                                            {bannerBand === id && <View style={{ height: 7, width: '100%', backgroundColor: colors.red, marginTop: 5 }}></View>}
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )
                        })}



                    </ScrollView>
                    {this.state.show && <View>
                        <Image
                            style={{ width: '100%', height: 180 }}
                            source={{ uri: banners[bannerBand - 1].banner }}
                            resizeMode='contain'
                        />

                        <TouchableWithoutFeedback onPress={() => this.setState({ show: false })}>

                            <View style={{ position: 'absolute', zIndex: +1, marginTop: 10, marginLeft: 10, backgroundColor: 'white', alignItems: 'flex-end', opacity: 0.8 }}>

                                <Icon type='EvilIcons' name='close' color={colors.red} size={35} />

                            </View>
                        </TouchableWithoutFeedback>
                    </View>}
                </View>
        )
    }
}