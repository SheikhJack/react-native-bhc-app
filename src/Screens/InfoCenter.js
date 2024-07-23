import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Enquiries from '../Components/Enquiries';

const Tab = createMaterialTopTabNavigator();

const BHCProducts = () => (
  <ScrollView style={styles.tabContainer}>
    <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 40 }}>
      BHC Products Information
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      OverView
    </Text>
    <Text style={{ marginBottom: 40 }}>
      The BHC Property Development Department is responsible for the development
      of the Corporations residential housing, and commercial building
      developments. Projects are developed for the Government, Parastatals,
      Corporates and the Public sector through appropriate building designs and
      systems. The Property Development Department initiates projects through a
      standard project development cycle which incorporates; project initiation,
      project definition, project development, project implementation, and
      project commissioning.
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      Property Development Philosophy{' '}
    </Text>
    <Text>
      The Property Development Department develops pristine modern high quality
      residential estates, and commercial building developments as built
      environments that articulate the customer’s needs and expectations to
      ensure high value proposition and return for investment.{' '}
    </Text>
  </ScrollView>
);

const ApplicationProcedures = () => (
  <ScrollView style={styles.tabContainer}>
    <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 40 }}>
      Application Procedures Information
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      OverView
    </Text>
    <Text style={{ marginBottom: 40 }}>
      We offer outright sale of its rented properties and new housing
      developments both conventional and sectional titles to different customer
      segments comprising Botswana citizens, citizen controlled companies,
      Parastatals, Botswana Government Departments and and other public
      institutions. We also administer the Tenant Purchase Scheme (TPS) which is
      available for old rented properties and unoccupied ones in Serowe, Tati
      Siding and GErald Estate in Francistown.. Our team of experienced Estates
      Officers at our Area Office in Gaborone and throughout all our Satellite
      Offices spread across Botswana are ready to assist you in making the right
      choice of buying your home. Contact the BHC Regional Office - South on
      (+267) 3646900 and speak to our Estates Officers about buying your BHC
      Home.
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      Buying Options
    </Text>
    <Text style={{ marginBottom: 40 }}>
      <Text style={{ fontWeight: 600, fontSize: 15 }}>Leased Homes </Text>
      Tenants submit certified copies of Omang, marriage certificate (if
      married, with spouse's Omang), financial reference and affidavit declaring
      whether the applicant has purchased a BHC house before or not. BHC vets
      the tenant and allows him/her to complete application form and pay
      valuation fee if he/she has passed the vetting. BHC value and offer the
      property to the tenant The financier brings a letter of undertaking or
      customer makes payment if self-financing before signing a sale agreement.
      The conveyancer transfers the title deed, the buyer bearing the costs. The
      financier makes full payment to BHC on behalf of the customer for purchase
      of the house.{''}
      <Text style={{ fontWeight: 600, fontSize: 15 }}>
        {' '}
        New Homes New housing units
      </Text>
      . BHC advertises the housing units earmarked for sale through the media.
      Customers view the housing units if they choose to. Customers submit
      requirements, same as for tenanted housing units. BHC vets the applicant,
      and allows him/her to complete application form and choose a unit, and
      then offer on first come first served basis. The rest of the process is as
      per tenanted housing units thereafter. Homes Available by Tender BHC
      advertises houses available for sale by tender through the media Customers
      submit sealed envelopes with requirements same as for tenanted housing
      units, with completed application form and administration fee payment
      receipt. BHC evaluates tenders and offer to the successful and eligible
      bidders as per the tender terms. The rest of the process is as per
      tenanted housing units thereafter. NB: Customers can be assisted in all
      the sales processes at all BHC Offices countrywide, save for tender where
      applicants have to deposit sealed bids at a specific Office.
    </Text>
  </ScrollView>
);

const EligibilityCriteria = () => (
  <ScrollView style={styles.tabContainer}>
    <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 40 }}>
      Eligibility Criteria Information
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      General Conditions
    </Text>
    <Text style={{ marginBottom: 40 }}>
      BHC sells only to citizens and citizen controlled companies ( ≥ 51%
      share-holding) Only first time buyers shall be considered, spouse jointly
      counted. Applicants who have already purchased form BHC, spouse jointly
      counted, shall only be considered where there would be no offers from
      first time buyers. Applicants indebted to BHC will not be eligible for
      offer Applicants must pass BHC vetting processes in order to be considered
      Applicants shall be required to complete BHC Application Form
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      Individuals
    </Text>
    <Text style={{ marginBottom: 40 }}>
      Certified copy of Omang, plus spouse’s if married Certified copy of
      Naturalization Certificate, if born outside Botswana Certified copy of
      Marriage Certificate, if married Financier’s letter stating how much
      mortgage qualified for Recent Bank statements as proof of sufficient
      funds, if self-financing Affidavit declaring that applicant, and spouse,
      if married, have not purchased BHC property before Spouse’s consent letter
      Pay slip
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      Individuals
    </Text>
    <Text style={{ marginBottom: 40 }}>
      Certified copy of Certificate of Incorporation Certified copies of share
      certificates Certified copy of Form 2 Certified copies of shareholders IDs
      (and naturalization certificates) Affidavit declaring properties purchased
      from BHC Financial reference/Bank statement Company resolution on purchase
      of BHC property
    </Text>
  </ScrollView>
);

const HousingDevelopments = () => (
  <ScrollView style={styles.tabContainer}>
    <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 40 }}>
      Housing Developments Information
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 4 }}>
      Planned Development OverView
    </Text>
    <Text style={{ marginBottom: 40 }}>
      The Corporation consistently undertakes effective demand survey in line
      with its mandate of providing affordable accommodation to Batswana
      throughout the country. To this end the Corporation has in the past
      identified several strategic areas around the country with a view to
      develop houses however these planned developments have been put on hold
      mainly due to challenges of portable water supply and unavailability of
      other services. These developments include the following; Gaborone, Block
      7 - 318 Units (Flats) Rakops 30 Nata 14 Tsabong 23 Pilane 200 Maun 100
      Tati Siding For more information please contact the Public and Corporate
      Affairs Department on 3605100 or email blebekwe@bhc.bw
    </Text>
  </ScrollView>
);

const FAQs = () => (
  <ScrollView style={styles.tabContainer}>
    <Text>Frequently Asked Questions</Text>
    {/* Add detailed FAQs here */}
  </ScrollView>
);

const GeneralEnquiries = () => (
  <ScrollView style={styles.tabContainer}>
    <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 40 }}>Enquire Now</Text>
     <Enquiries/>
  </ScrollView>
);

const InformationCenter = () => {
  return (
    <Tab.Navigator
      initialRouteName="BHCProducts"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 120 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="BHCProducts"
        component={BHCProducts}
        options={{ title: 'BHC Products' }}
      />
      <Tab.Screen
        name="ApplicationProcedures"
        component={ApplicationProcedures}
        options={{ title: 'Application Procedures' }}
      />
      <Tab.Screen
        name="EligibilityCriteria"
        component={EligibilityCriteria}
        options={{ title: 'Eligibility Criteria' }}
      />
      <Tab.Screen
        name="HousingDevelopments"
        component={HousingDevelopments}
        options={{ title: 'Housing Developments' }}
      />
      <Tab.Screen name="FAQs" component={FAQs} options={{ title: 'FAQs' }} />
      <Tab.Screen
        name="GeneralEnquiries"
        component={GeneralEnquiries}
        options={{ title: 'General Enquiries' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    padding: 16,
  },
});

export default InformationCenter;
