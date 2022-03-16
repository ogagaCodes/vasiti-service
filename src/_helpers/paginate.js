exports.getPaginatedRecords = async (
    model,
    { limit: specifiedLimit = 10, page, data = {}}
  ) => {
    try {
      const limit = Math.min(specifiedLimit, 10); // restrict limit to 100
      const offset = 0 + (Math.abs(page || 1) - 1) * limit;
  
      const modelData = await model.count({where:{ ...data }});
  
      const result = await model
        .findAll({where:{ ...data },{ offset: offset, limit: limit }order: [
            ['id', 'DESC']});
       return {
        data: result,
        pagination: {
          pageSize: limit, //number of content yousee per page
          totalCount: modelData, //Total number of records
          pageCount: Math.ceil(modelData / limit), //How many pages will be available
          currentPage: +page, //if you're on page 1 or 18...
          hasNext: page * limit < modelData,
        },
      };
    } catch (err) {
      console.log(err);
    }
  };
  