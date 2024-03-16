import prisma from "../../DB/database.js";

export const addCampaign = async (campaignData) => {
  try {
    
    const newCampaign = await prisma.campaign.create({
      data: campaignData,
    });
    return newCampaign;
  } catch (error) {
    throw error;
  }
};

export const allCampaigns = async (currentPage , perPage) => {
  try {
    const totalCount = await prisma.posterText.count();
    const totalPages = Math.ceil(totalCount / perPage);

    const allcampaigns = await prisma.campaign.findMany({
      skip:(currentPage - 1) * perPage,
      take:perPage
    });

    if(allcampaigns.length == 0) {
      throw new Error ("Campaigns not found");
  }
    return {allcampaigns , totalCount , totalPages};
  } catch (error) {
    throw error;
  }
};

export const showCampaign = async (campaignData) => {
  try {
    const campaignId = campaignData;

    const campaign = await prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
    });
    return campaign;
  } catch (error) {
    return error;
  }
};

export const update = async (
  updateCampaignsData,
  campaignBodyData,
  result,
  poster
) => {
  try {
    const CampaignId = updateCampaignsData;

    const { name, createdBy, updatedBy } = campaignBodyData;

    const posterImage = poster;
    const data = result;

    const updatedCampaign = await prisma.campaign.update({
      where: {
        id: CampaignId,
      },
      data: {
        name: name,
        posterImage: posterImage,
        createdBy: createdBy,
        updatedBy: updatedBy,
      },
    });

    return updatedCampaign;
  } catch (error) {
    return error;
  }
};

export const softDeleteCampaign = async (campaignId) => {
  try {
    const existingCampaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
    });

    if (!existingCampaign) {
      return { status: 404, message: "Campaign is  not exits in our sysytem" };
    }

    const deletedData = await prisma.campaign.update({
      where: { id: campaignId },
      data: { deleted: true },
    });
    return deletedData;
  } catch (error) {
    return error;
  }
};

export const deleteCampaign = async (campaignData) => {
  try {
    const campaignId = campaignData;

    const deletedCampaign = await prisma.campaign.delete({
      where: {
        id: campaignId,
      },
    });
    return deletedCampaign;
  } catch (error) {
    throw error;
  }
};