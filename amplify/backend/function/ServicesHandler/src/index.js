

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const locationId = event.pathParameters.locationId;
    const serviceDetails = {'locationId' : locationId, 
        'services': [
        {'vendorId': 123,
         'name': 'HolyIsland Water sports',
         'url': 'https://holyislandwatersports.com/',
         'description':'Water sports in Rameswaram'
        },
        {'vendorId': 1234,
         'name': 'Explore Dhanuskodi ',
         'url': 'https://holyislandwatersports.com/',
         'description':'One day trips to Dhanuskodi'
        },

        ] 
    };
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(serviceDetails),
    };

    return response;
};
