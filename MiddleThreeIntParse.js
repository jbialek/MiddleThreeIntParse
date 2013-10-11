/**
 * Created with JetBrains WebStorm.
 * User: jbialek
 * Date: 10/11/13
 * Time: 3:00 PM
 * To change this template use File | Settings | File Templates.
 */
module.exports = function GetMidThreeInt(intValue)
{
    var parsedIntValue = parseInt(intValue)

    if (! isNaN(parsedIntValue))
    {
        try
        {
              var intLength = parsedIntValue.toString().length;

              if ( intLength < 4)
              {
                  return parsedIntValue;
              }
              else
              {
                  //Find Middle
                  var midPoint = parseInt(intLength / 2);

                  return parsedIntValue.toString().substr(midPoint-1, 3);
              }
        }
        catch(err)
        {
            throw err;
        }
    }
    else
        throw intValue + ' is not an integer!'
}
