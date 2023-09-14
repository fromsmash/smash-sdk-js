import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as UpdateProviderInvalidParameterError } from "./types/UpdateProvider/UpdateProviderError";
import { UnauthorizedError as UpdateProviderUnauthorizedError } from "./types/UpdateProvider/UpdateProviderError";
import { InvalidCertificateError as UpdateProviderInvalidCertificateError } from "./types/UpdateProvider/UpdateProviderError";
import { NotFoundError as UpdateProviderNotFoundError } from "./types/UpdateProvider/UpdateProviderError";
import { InternalServerError as UpdateProviderInternalServerError } from "./types/UpdateProvider/UpdateProviderError";
import { BadGatewayError as UpdateProviderBadGatewayError } from "./types/UpdateProvider/UpdateProviderError";
import { GatewayTimeoutError as UpdateProviderGatewayTimeoutError } from "./types/UpdateProvider/UpdateProviderError";
import { InvalidParameterError as UpdateRoleInvalidParameterError } from "./types/UpdateRole/UpdateRoleError";
import { UnauthorizedError as UpdateRoleUnauthorizedError } from "./types/UpdateRole/UpdateRoleError";
import { NotFoundError as UpdateRoleNotFoundError } from "./types/UpdateRole/UpdateRoleError";
import { InternalServerError as UpdateRoleInternalServerError } from "./types/UpdateRole/UpdateRoleError";
import { BadGatewayError as UpdateRoleBadGatewayError } from "./types/UpdateRole/UpdateRoleError";
import { GatewayTimeoutError as UpdateRoleGatewayTimeoutError } from "./types/UpdateRole/UpdateRoleError";
import { InvalidParameterError as UpdateTeamInvalidParameterError } from "./types/UpdateTeam/UpdateTeamError";
import { UnauthorizedError as UpdateTeamUnauthorizedError } from "./types/UpdateTeam/UpdateTeamError";
import { NotFoundError as UpdateTeamNotFoundError } from "./types/UpdateTeam/UpdateTeamError";
import { InternalServerError as UpdateTeamInternalServerError } from "./types/UpdateTeam/UpdateTeamError";
import { BadGatewayError as UpdateTeamBadGatewayError } from "./types/UpdateTeam/UpdateTeamError";
import { GatewayTimeoutError as UpdateTeamGatewayTimeoutError } from "./types/UpdateTeam/UpdateTeamError";
import { InvalidParameterError as UpdateTeamGroupInvalidParameterError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { UnauthorizedError as UpdateTeamGroupUnauthorizedError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { NotFoundError as UpdateTeamGroupNotFoundError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { InternalServerError as UpdateTeamGroupInternalServerError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { BadGatewayError as UpdateTeamGroupBadGatewayError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { GatewayTimeoutError as UpdateTeamGroupGatewayTimeoutError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { InvalidParameterError as UpdateTeamUserInvalidParameterError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { UnauthorizedError as UpdateTeamUserUnauthorizedError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { InvalidSubscriptionError as UpdateTeamUserInvalidSubscriptionError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { ForbiddenToUpdateProvisionedUserError as UpdateTeamUserForbiddenToUpdateProvisionedUserError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { NotFoundError as UpdateTeamUserNotFoundError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { ConflictError as UpdateTeamUserConflictError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { InternalServerError as UpdateTeamUserInternalServerError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { BadGatewayError as UpdateTeamUserBadGatewayError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { GatewayTimeoutError as UpdateTeamUserGatewayTimeoutError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { InvalidParameterError as UpdateUserInvalidParameterError } from "./types/UpdateUser/UpdateUserError";
import { UnauthorizedError as UpdateUserUnauthorizedError } from "./types/UpdateUser/UpdateUserError";
import { ForbiddenToUpdateProvisionedUserError as UpdateUserForbiddenToUpdateProvisionedUserError } from "./types/UpdateUser/UpdateUserError";
import { InvalidSubscriptionError as UpdateUserInvalidSubscriptionError } from "./types/UpdateUser/UpdateUserError";
import { NotFoundError as UpdateUserNotFoundError } from "./types/UpdateUser/UpdateUserError";
import { InternalServerError as UpdateUserInternalServerError } from "./types/UpdateUser/UpdateUserError";
import { BadGatewayError as UpdateUserBadGatewayError } from "./types/UpdateUser/UpdateUserError";
import { GatewayTimeoutError as UpdateUserGatewayTimeoutError } from "./types/UpdateUser/UpdateUserError";
import { InvalidParameterError as UpdateUserSCIMInvalidParameterError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { UnauthorizedError as UpdateUserSCIMUnauthorizedError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { NotFoundError as UpdateUserSCIMNotFoundError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { InternalServerError as UpdateUserSCIMInternalServerError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { BadGatewayError as UpdateUserSCIMBadGatewayError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { GatewayTimeoutError as UpdateUserSCIMGatewayTimeoutError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { InvalidParameterError as GetPolicyInvalidParameterError } from "./types/GetPolicy/GetPolicyError";
import { UnauthorizedError as GetPolicyUnauthorizedError } from "./types/GetPolicy/GetPolicyError";
import { NotFoundError as GetPolicyNotFoundError } from "./types/GetPolicy/GetPolicyError";
import { InternalServerError as GetPolicyInternalServerError } from "./types/GetPolicy/GetPolicyError";
import { BadGatewayError as GetPolicyBadGatewayError } from "./types/GetPolicy/GetPolicyError";
import { GatewayTimeoutError as GetPolicyGatewayTimeoutError } from "./types/GetPolicy/GetPolicyError";
import { InvalidParameterError as GetProviderInvalidParameterError } from "./types/GetProvider/GetProviderError";
import { UnauthorizedError as GetProviderUnauthorizedError } from "./types/GetProvider/GetProviderError";
import { NotFoundError as GetProviderNotFoundError } from "./types/GetProvider/GetProviderError";
import { InternalServerError as GetProviderInternalServerError } from "./types/GetProvider/GetProviderError";
import { BadGatewayError as GetProviderBadGatewayError } from "./types/GetProvider/GetProviderError";
import { GatewayTimeoutError as GetProviderGatewayTimeoutError } from "./types/GetProvider/GetProviderError";
import { UnauthorizedError as GetResourceTypesUnauthorizedError } from "./types/GetResourceTypes/GetResourceTypesError";
import { InternalServerError as GetResourceTypesInternalServerError } from "./types/GetResourceTypes/GetResourceTypesError";
import { BadGatewayError as GetResourceTypesBadGatewayError } from "./types/GetResourceTypes/GetResourceTypesError";
import { GatewayTimeoutError as GetResourceTypesGatewayTimeoutError } from "./types/GetResourceTypes/GetResourceTypesError";
import { InvalidParameterError as GetRoleInvalidParameterError } from "./types/GetRole/GetRoleError";
import { UnauthorizedError as GetRoleUnauthorizedError } from "./types/GetRole/GetRoleError";
import { NotFoundError as GetRoleNotFoundError } from "./types/GetRole/GetRoleError";
import { InternalServerError as GetRoleInternalServerError } from "./types/GetRole/GetRoleError";
import { BadGatewayError as GetRoleBadGatewayError } from "./types/GetRole/GetRoleError";
import { GatewayTimeoutError as GetRoleGatewayTimeoutError } from "./types/GetRole/GetRoleError";
import { UnauthorizedError as GetSchemasUnauthorizedError } from "./types/GetSchemas/GetSchemasError";
import { InternalServerError as GetSchemasInternalServerError } from "./types/GetSchemas/GetSchemasError";
import { BadGatewayError as GetSchemasBadGatewayError } from "./types/GetSchemas/GetSchemasError";
import { GatewayTimeoutError as GetSchemasGatewayTimeoutError } from "./types/GetSchemas/GetSchemasError";
import { UnauthorizedError as GetServiceProviderConfigUnauthorizedError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { InternalServerError as GetServiceProviderConfigInternalServerError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { BadGatewayError as GetServiceProviderConfigBadGatewayError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { GatewayTimeoutError as GetServiceProviderConfigGatewayTimeoutError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { InvalidParameterError as GetSigninConfigurationInvalidParameterError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { NotFoundError as GetSigninConfigurationNotFoundError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { InternalServerError as GetSigninConfigurationInternalServerError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { BadGatewayError as GetSigninConfigurationBadGatewayError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { GatewayTimeoutError as GetSigninConfigurationGatewayTimeoutError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { InvalidParameterError as GetTeamInvalidParameterError } from "./types/GetTeam/GetTeamError";
import { UnauthorizedError as GetTeamUnauthorizedError } from "./types/GetTeam/GetTeamError";
import { NotFoundError as GetTeamNotFoundError } from "./types/GetTeam/GetTeamError";
import { InternalServerError as GetTeamInternalServerError } from "./types/GetTeam/GetTeamError";
import { BadGatewayError as GetTeamBadGatewayError } from "./types/GetTeam/GetTeamError";
import { GatewayTimeoutError as GetTeamGatewayTimeoutError } from "./types/GetTeam/GetTeamError";
import { InvalidParameterError as GetTeamGroupInvalidParameterError } from "./types/GetTeamGroup/GetTeamGroupError";
import { UnauthorizedError as GetTeamGroupUnauthorizedError } from "./types/GetTeamGroup/GetTeamGroupError";
import { NotFoundError as GetTeamGroupNotFoundError } from "./types/GetTeamGroup/GetTeamGroupError";
import { InternalServerError as GetTeamGroupInternalServerError } from "./types/GetTeamGroup/GetTeamGroupError";
import { BadGatewayError as GetTeamGroupBadGatewayError } from "./types/GetTeamGroup/GetTeamGroupError";
import { GatewayTimeoutError as GetTeamGroupGatewayTimeoutError } from "./types/GetTeamGroup/GetTeamGroupError";
import { InvalidParameterError as GetTeamUserInvalidParameterError } from "./types/GetTeamUser/GetTeamUserError";
import { UnauthorizedError as GetTeamUserUnauthorizedError } from "./types/GetTeamUser/GetTeamUserError";
import { NotFoundError as GetTeamUserNotFoundError } from "./types/GetTeamUser/GetTeamUserError";
import { InternalServerError as GetTeamUserInternalServerError } from "./types/GetTeamUser/GetTeamUserError";
import { BadGatewayError as GetTeamUserBadGatewayError } from "./types/GetTeamUser/GetTeamUserError";
import { GatewayTimeoutError as GetTeamUserGatewayTimeoutError } from "./types/GetTeamUser/GetTeamUserError";
import { InvalidParameterError as GetUserInvalidParameterError } from "./types/GetUser/GetUserError";
import { UnauthorizedError as GetUserUnauthorizedError } from "./types/GetUser/GetUserError";
import { NotFoundError as GetUserNotFoundError } from "./types/GetUser/GetUserError";
import { InternalServerError as GetUserInternalServerError } from "./types/GetUser/GetUserError";
import { BadGatewayError as GetUserBadGatewayError } from "./types/GetUser/GetUserError";
import { GatewayTimeoutError as GetUserGatewayTimeoutError } from "./types/GetUser/GetUserError";
import { InvalidParameterError as GetUserSCIMInvalidParameterError } from "./types/GetUserSCIM/GetUserSCIMError";
import { UnauthorizedError as GetUserSCIMUnauthorizedError } from "./types/GetUserSCIM/GetUserSCIMError";
import { NotFoundError as GetUserSCIMNotFoundError } from "./types/GetUserSCIM/GetUserSCIMError";
import { InternalServerError as GetUserSCIMInternalServerError } from "./types/GetUserSCIM/GetUserSCIMError";
import { BadGatewayError as GetUserSCIMBadGatewayError } from "./types/GetUserSCIM/GetUserSCIMError";
import { GatewayTimeoutError as GetUserSCIMGatewayTimeoutError } from "./types/GetUserSCIM/GetUserSCIMError";
import { InvalidParameterError as InviteTeamUserInvalidParameterError } from "./types/InviteTeamUser/InviteTeamUserError";
import { UnauthorizedError as InviteTeamUserUnauthorizedError } from "./types/InviteTeamUser/InviteTeamUserError";
import { NotFoundError as InviteTeamUserNotFoundError } from "./types/InviteTeamUser/InviteTeamUserError";
import { InternalServerError as InviteTeamUserInternalServerError } from "./types/InviteTeamUser/InviteTeamUserError";
import { BadGatewayError as InviteTeamUserBadGatewayError } from "./types/InviteTeamUser/InviteTeamUserError";
import { GatewayTimeoutError as InviteTeamUserGatewayTimeoutError } from "./types/InviteTeamUser/InviteTeamUserError";
import { InvalidParameterError as InviteUserInvalidParameterError } from "./types/InviteUser/InviteUserError";
import { UnauthorizedError as InviteUserUnauthorizedError } from "./types/InviteUser/InviteUserError";
import { InvalidEmailError as InviteUserInvalidEmailError } from "./types/InviteUser/InviteUserError";
import { NotFoundError as InviteUserNotFoundError } from "./types/InviteUser/InviteUserError";
import { InternalServerError as InviteUserInternalServerError } from "./types/InviteUser/InviteUserError";
import { BadGatewayError as InviteUserBadGatewayError } from "./types/InviteUser/InviteUserError";
import { GatewayTimeoutError as InviteUserGatewayTimeoutError } from "./types/InviteUser/InviteUserError";
import { InvalidParameterError as ListGroupRolesInvalidParameterError } from "./types/ListGroupRoles/ListGroupRolesError";
import { UnauthorizedError as ListGroupRolesUnauthorizedError } from "./types/ListGroupRoles/ListGroupRolesError";
import { NotFoundError as ListGroupRolesNotFoundError } from "./types/ListGroupRoles/ListGroupRolesError";
import { InternalServerError as ListGroupRolesInternalServerError } from "./types/ListGroupRoles/ListGroupRolesError";
import { BadGatewayError as ListGroupRolesBadGatewayError } from "./types/ListGroupRoles/ListGroupRolesError";
import { GatewayTimeoutError as ListGroupRolesGatewayTimeoutError } from "./types/ListGroupRoles/ListGroupRolesError";
import { InvalidParameterError as ListGroupTeamsInvalidParameterError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { UnauthorizedError as ListGroupTeamsUnauthorizedError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { NotFoundError as ListGroupTeamsNotFoundError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { InternalServerError as ListGroupTeamsInternalServerError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { BadGatewayError as ListGroupTeamsBadGatewayError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { GatewayTimeoutError as ListGroupTeamsGatewayTimeoutError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { InvalidParameterError as ListGroupUsersInvalidParameterError } from "./types/ListGroupUsers/ListGroupUsersError";
import { UnauthorizedError as ListGroupUsersUnauthorizedError } from "./types/ListGroupUsers/ListGroupUsersError";
import { NotFoundError as ListGroupUsersNotFoundError } from "./types/ListGroupUsers/ListGroupUsersError";
import { InternalServerError as ListGroupUsersInternalServerError } from "./types/ListGroupUsers/ListGroupUsersError";
import { BadGatewayError as ListGroupUsersBadGatewayError } from "./types/ListGroupUsers/ListGroupUsersError";
import { GatewayTimeoutError as ListGroupUsersGatewayTimeoutError } from "./types/ListGroupUsers/ListGroupUsersError";
import { UnauthorizedError as ListGroupsUnauthorizedError } from "./types/ListGroups/ListGroupsError";
import { NotFoundError as ListGroupsNotFoundError } from "./types/ListGroups/ListGroupsError";
import { InternalServerError as ListGroupsInternalServerError } from "./types/ListGroups/ListGroupsError";
import { BadGatewayError as ListGroupsBadGatewayError } from "./types/ListGroups/ListGroupsError";
import { GatewayTimeoutError as ListGroupsGatewayTimeoutError } from "./types/ListGroups/ListGroupsError";
import { InvalidParameterError as ListGroupsSCIMInvalidParameterError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { UnauthorizedError as ListGroupsSCIMUnauthorizedError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { InternalServerError as ListGroupsSCIMInternalServerError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { BadGatewayError as ListGroupsSCIMBadGatewayError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { GatewayTimeoutError as ListGroupsSCIMGatewayTimeoutError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { UnauthorizedError as ListPoliciesUnauthorizedError } from "./types/ListPolicies/ListPoliciesError";
import { InternalServerError as ListPoliciesInternalServerError } from "./types/ListPolicies/ListPoliciesError";
import { BadGatewayError as ListPoliciesBadGatewayError } from "./types/ListPolicies/ListPoliciesError";
import { GatewayTimeoutError as ListPoliciesGatewayTimeoutError } from "./types/ListPolicies/ListPoliciesError";
import { UnauthorizedError as ListProvidersUnauthorizedError } from "./types/ListProviders/ListProvidersError";
import { InternalServerError as ListProvidersInternalServerError } from "./types/ListProviders/ListProvidersError";
import { BadGatewayError as ListProvidersBadGatewayError } from "./types/ListProviders/ListProvidersError";
import { GatewayTimeoutError as ListProvidersGatewayTimeoutError } from "./types/ListProviders/ListProvidersError";
import { UnauthorizedError as ListRolesUnauthorizedError } from "./types/ListRoles/ListRolesError";
import { InternalServerError as ListRolesInternalServerError } from "./types/ListRoles/ListRolesError";
import { BadGatewayError as ListRolesBadGatewayError } from "./types/ListRoles/ListRolesError";
import { GatewayTimeoutError as ListRolesGatewayTimeoutError } from "./types/ListRoles/ListRolesError";
import { InvalidParameterError as ListTeamGroupRolesInvalidParameterError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { UnauthorizedError as ListTeamGroupRolesUnauthorizedError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { NotFoundError as ListTeamGroupRolesNotFoundError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { InternalServerError as ListTeamGroupRolesInternalServerError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { BadGatewayError as ListTeamGroupRolesBadGatewayError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { GatewayTimeoutError as ListTeamGroupRolesGatewayTimeoutError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { InvalidParameterError as ListTeamGroupUsersInvalidParameterError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { UnauthorizedError as ListTeamGroupUsersUnauthorizedError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { NotFoundError as ListTeamGroupUsersNotFoundError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { InternalServerError as ListTeamGroupUsersInternalServerError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { BadGatewayError as ListTeamGroupUsersBadGatewayError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { GatewayTimeoutError as ListTeamGroupUsersGatewayTimeoutError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { InvalidParameterError as ListTeamGroupsInvalidParameterError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { UnauthorizedError as ListTeamGroupsUnauthorizedError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { NotFoundError as ListTeamGroupsNotFoundError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { InternalServerError as ListTeamGroupsInternalServerError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { BadGatewayError as ListTeamGroupsBadGatewayError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { GatewayTimeoutError as ListTeamGroupsGatewayTimeoutError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { InvalidParameterError as ListTeamRolesInvalidParameterError } from "./types/ListTeamRoles/ListTeamRolesError";
import { UnauthorizedError as ListTeamRolesUnauthorizedError } from "./types/ListTeamRoles/ListTeamRolesError";
import { NotFoundError as ListTeamRolesNotFoundError } from "./types/ListTeamRoles/ListTeamRolesError";
import { InternalServerError as ListTeamRolesInternalServerError } from "./types/ListTeamRoles/ListTeamRolesError";
import { BadGatewayError as ListTeamRolesBadGatewayError } from "./types/ListTeamRoles/ListTeamRolesError";
import { GatewayTimeoutError as ListTeamRolesGatewayTimeoutError } from "./types/ListTeamRoles/ListTeamRolesError";
import { InvalidParameterError as ListTeamUserGroupsInvalidParameterError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { UnauthorizedError as ListTeamUserGroupsUnauthorizedError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { NotFoundError as ListTeamUserGroupsNotFoundError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { InternalServerError as ListTeamUserGroupsInternalServerError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { BadGatewayError as ListTeamUserGroupsBadGatewayError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { GatewayTimeoutError as ListTeamUserGroupsGatewayTimeoutError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { InvalidParameterError as ListTeamUserRolesInvalidParameterError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { UnauthorizedError as ListTeamUserRolesUnauthorizedError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { NotFoundError as ListTeamUserRolesNotFoundError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { InternalServerError as ListTeamUserRolesInternalServerError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { BadGatewayError as ListTeamUserRolesBadGatewayError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { GatewayTimeoutError as ListTeamUserRolesGatewayTimeoutError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { InvalidParameterError as ListTeamUsersInvalidParameterError } from "./types/ListTeamUsers/ListTeamUsersError";
import { UnauthorizedError as ListTeamUsersUnauthorizedError } from "./types/ListTeamUsers/ListTeamUsersError";
import { NotFoundError as ListTeamUsersNotFoundError } from "./types/ListTeamUsers/ListTeamUsersError";
import { InternalServerError as ListTeamUsersInternalServerError } from "./types/ListTeamUsers/ListTeamUsersError";
import { BadGatewayError as ListTeamUsersBadGatewayError } from "./types/ListTeamUsers/ListTeamUsersError";
import { GatewayTimeoutError as ListTeamUsersGatewayTimeoutError } from "./types/ListTeamUsers/ListTeamUsersError";
import { UnauthorizedError as ListTeamsUnauthorizedError } from "./types/ListTeams/ListTeamsError";
import { InternalServerError as ListTeamsInternalServerError } from "./types/ListTeams/ListTeamsError";
import { BadGatewayError as ListTeamsBadGatewayError } from "./types/ListTeams/ListTeamsError";
import { GatewayTimeoutError as ListTeamsGatewayTimeoutError } from "./types/ListTeams/ListTeamsError";
import { InvalidParameterError as ListUserGroupsInvalidParameterError } from "./types/ListUserGroups/ListUserGroupsError";
import { UnauthorizedError as ListUserGroupsUnauthorizedError } from "./types/ListUserGroups/ListUserGroupsError";
import { NotFoundError as ListUserGroupsNotFoundError } from "./types/ListUserGroups/ListUserGroupsError";
import { InternalServerError as ListUserGroupsInternalServerError } from "./types/ListUserGroups/ListUserGroupsError";
import { BadGatewayError as ListUserGroupsBadGatewayError } from "./types/ListUserGroups/ListUserGroupsError";
import { GatewayTimeoutError as ListUserGroupsGatewayTimeoutError } from "./types/ListUserGroups/ListUserGroupsError";
import { InvalidParameterError as ListUserGroupsRolesInvalidParameterError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { UnauthorizedError as ListUserGroupsRolesUnauthorizedError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { NotFoundError as ListUserGroupsRolesNotFoundError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { InternalServerError as ListUserGroupsRolesInternalServerError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { BadGatewayError as ListUserGroupsRolesBadGatewayError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { GatewayTimeoutError as ListUserGroupsRolesGatewayTimeoutError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { InvalidParameterError as ListUserGroupsTeamsInvalidParameterError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { UnauthorizedError as ListUserGroupsTeamsUnauthorizedError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { NotFoundError as ListUserGroupsTeamsNotFoundError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { InternalServerError as ListUserGroupsTeamsInternalServerError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { BadGatewayError as ListUserGroupsTeamsBadGatewayError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { GatewayTimeoutError as ListUserGroupsTeamsGatewayTimeoutError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { InvalidParameterError as ListUserRolesInvalidParameterError } from "./types/ListUserRoles/ListUserRolesError";
import { UnauthorizedError as ListUserRolesUnauthorizedError } from "./types/ListUserRoles/ListUserRolesError";
import { NotFoundError as ListUserRolesNotFoundError } from "./types/ListUserRoles/ListUserRolesError";
import { InternalServerError as ListUserRolesInternalServerError } from "./types/ListUserRoles/ListUserRolesError";
import { BadGatewayError as ListUserRolesBadGatewayError } from "./types/ListUserRoles/ListUserRolesError";
import { GatewayTimeoutError as ListUserRolesGatewayTimeoutError } from "./types/ListUserRoles/ListUserRolesError";
import { InvalidParameterError as ListUserTeamsInvalidParameterError } from "./types/ListUserTeams/ListUserTeamsError";
import { UnauthorizedError as ListUserTeamsUnauthorizedError } from "./types/ListUserTeams/ListUserTeamsError";
import { NotFoundError as ListUserTeamsNotFoundError } from "./types/ListUserTeams/ListUserTeamsError";
import { InternalServerError as ListUserTeamsInternalServerError } from "./types/ListUserTeams/ListUserTeamsError";
import { BadGatewayError as ListUserTeamsBadGatewayError } from "./types/ListUserTeams/ListUserTeamsError";
import { GatewayTimeoutError as ListUserTeamsGatewayTimeoutError } from "./types/ListUserTeams/ListUserTeamsError";
import { UnauthorizedError as ListUsersUnauthorizedError } from "./types/ListUsers/ListUsersError";
import { InternalServerError as ListUsersInternalServerError } from "./types/ListUsers/ListUsersError";
import { BadGatewayError as ListUsersBadGatewayError } from "./types/ListUsers/ListUsersError";
import { GatewayTimeoutError as ListUsersGatewayTimeoutError } from "./types/ListUsers/ListUsersError";
import { InvalidParameterError as ListUsersSCIMInvalidParameterError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { UnauthorizedError as ListUsersSCIMUnauthorizedError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { InternalServerError as ListUsersSCIMInternalServerError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { BadGatewayError as ListUsersSCIMBadGatewayError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { GatewayTimeoutError as ListUsersSCIMGatewayTimeoutError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { InvalidParameterError as PatchGroupSCIMInvalidParameterError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { UnauthorizedError as PatchGroupSCIMUnauthorizedError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { NotFoundError as PatchGroupSCIMNotFoundError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { InternalServerError as PatchGroupSCIMInternalServerError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { BadGatewayError as PatchGroupSCIMBadGatewayError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { GatewayTimeoutError as PatchGroupSCIMGatewayTimeoutError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { InvalidParameterError as PatchUserSCIMInvalidParameterError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { UnauthorizedError as PatchUserSCIMUnauthorizedError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { NotFoundError as PatchUserSCIMNotFoundError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { InternalServerError as PatchUserSCIMInternalServerError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { BadGatewayError as PatchUserSCIMBadGatewayError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { GatewayTimeoutError as PatchUserSCIMGatewayTimeoutError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { InvalidParameterError as RenewTokenInvalidParameterError } from "./types/RenewToken/RenewTokenError";
import { PasswordRevokedError as RenewTokenPasswordRevokedError } from "./types/RenewToken/RenewTokenError";
import { IdentityDisabledError as RenewTokenIdentityDisabledError } from "./types/RenewToken/RenewTokenError";
import { NotAllowedError as RenewTokenNotAllowedError } from "./types/RenewToken/RenewTokenError";
import { InvalidRefreshTokenError as RenewTokenInvalidRefreshTokenError } from "./types/RenewToken/RenewTokenError";
import { NotFoundError as RenewTokenNotFoundError } from "./types/RenewToken/RenewTokenError";
import { InternalServerError as RenewTokenInternalServerError } from "./types/RenewToken/RenewTokenError";
import { BadGatewayError as RenewTokenBadGatewayError } from "./types/RenewToken/RenewTokenError";
import { GatewayTimeoutError as RenewTokenGatewayTimeoutError } from "./types/RenewToken/RenewTokenError";
import { InvalidParameterError as ResetPasswordInvalidParameterError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidForgotPasswordError as ResetPasswordInvalidForgotPasswordError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidForgotPasswordSecretError as ResetPasswordInvalidForgotPasswordSecretError } from "./types/ResetPassword/ResetPasswordError";
import { ExpiredForgotPasswordError as ResetPasswordExpiredForgotPasswordError } from "./types/ResetPassword/ResetPasswordError";
import { NotFoundError as ResetPasswordNotFoundError } from "./types/ResetPassword/ResetPasswordError";
import { InternalServerError as ResetPasswordInternalServerError } from "./types/ResetPassword/ResetPasswordError";
import { BadGatewayError as ResetPasswordBadGatewayError } from "./types/ResetPassword/ResetPasswordError";
import { GatewayTimeoutError as ResetPasswordGatewayTimeoutError } from "./types/ResetPassword/ResetPasswordError";
import { UnauthorizedError as RotateKeyUnauthorizedError } from "./types/RotateKey/RotateKeyError";
import { NotFoundError as RotateKeyNotFoundError } from "./types/RotateKey/RotateKeyError";
import { InternalServerError as RotateKeyInternalServerError } from "./types/RotateKey/RotateKeyError";
import { BadGatewayError as RotateKeyBadGatewayError } from "./types/RotateKey/RotateKeyError";
import { GatewayTimeoutError as RotateKeyGatewayTimeoutError } from "./types/RotateKey/RotateKeyError";
import { InvalidParameterError as RotateUserKeyInvalidParameterError } from "./types/RotateUserKey/RotateUserKeyError";
import { UnauthorizedError as RotateUserKeyUnauthorizedError } from "./types/RotateUserKey/RotateUserKeyError";
import { NotFoundError as RotateUserKeyNotFoundError } from "./types/RotateUserKey/RotateUserKeyError";
import { InternalServerError as RotateUserKeyInternalServerError } from "./types/RotateUserKey/RotateUserKeyError";
import { BadGatewayError as RotateUserKeyBadGatewayError } from "./types/RotateUserKey/RotateUserKeyError";
import { GatewayTimeoutError as RotateUserKeyGatewayTimeoutError } from "./types/RotateUserKey/RotateUserKeyError";
import { InvalidParameterError as SSOSignInInvalidParameterError } from "./types/SSOSignIn/SSOSignInError";
import { NotFoundError as SSOSignInNotFoundError } from "./types/SSOSignIn/SSOSignInError";
import { ConflictError as SSOSignInConflictError } from "./types/SSOSignIn/SSOSignInError";
import { InternalServerError as SSOSignInInternalServerError } from "./types/SSOSignIn/SSOSignInError";
import { BadGatewayError as SSOSignInBadGatewayError } from "./types/SSOSignIn/SSOSignInError";
import { GatewayTimeoutError as SSOSignInGatewayTimeoutError } from "./types/SSOSignIn/SSOSignInError";
import { InvalidParameterError as SamlSignOnInvalidParameterError } from "./types/SamlSignOn/SamlSignOnError";
import { UserNotAllowedToSignOnError as SamlSignOnUserNotAllowedToSignOnError } from "./types/SamlSignOn/SamlSignOnError";
import { NotFoundError as SamlSignOnNotFoundError } from "./types/SamlSignOn/SamlSignOnError";
import { ConflictError as SamlSignOnConflictError } from "./types/SamlSignOn/SamlSignOnError";
import { InternalServerError as SamlSignOnInternalServerError } from "./types/SamlSignOn/SamlSignOnError";
import { BadGatewayError as SamlSignOnBadGatewayError } from "./types/SamlSignOn/SamlSignOnError";
import { GatewayTimeoutError as SamlSignOnGatewayTimeoutError } from "./types/SamlSignOn/SamlSignOnError";
import { InvalidParameterError as UpdateAccountInvalidParameterError } from "./types/UpdateAccount/UpdateAccountError";
import { UnauthorizedError as UpdateAccountUnauthorizedError } from "./types/UpdateAccount/UpdateAccountError";
import { ForbiddenError as UpdateAccountForbiddenError } from "./types/UpdateAccount/UpdateAccountError";
import { NotFoundError as UpdateAccountNotFoundError } from "./types/UpdateAccount/UpdateAccountError";
import { ConflictError as UpdateAccountConflictError } from "./types/UpdateAccount/UpdateAccountError";
import { InternalServerError as UpdateAccountInternalServerError } from "./types/UpdateAccount/UpdateAccountError";
import { BadGatewayError as UpdateAccountBadGatewayError } from "./types/UpdateAccount/UpdateAccountError";
import { GatewayTimeoutError as UpdateAccountGatewayTimeoutError } from "./types/UpdateAccount/UpdateAccountError";
import { InvalidParameterError as UpdateGroupInvalidParameterError } from "./types/UpdateGroup/UpdateGroupError";
import { UnauthorizedError as UpdateGroupUnauthorizedError } from "./types/UpdateGroup/UpdateGroupError";
import { NotFoundError as UpdateGroupNotFoundError } from "./types/UpdateGroup/UpdateGroupError";
import { InternalServerError as UpdateGroupInternalServerError } from "./types/UpdateGroup/UpdateGroupError";
import { BadGatewayError as UpdateGroupBadGatewayError } from "./types/UpdateGroup/UpdateGroupError";
import { GatewayTimeoutError as UpdateGroupGatewayTimeoutError } from "./types/UpdateGroup/UpdateGroupError";
import { InvalidParameterError as UpdateGroupSCIMInvalidParameterError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { UnauthorizedError as UpdateGroupSCIMUnauthorizedError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { NotFoundError as UpdateGroupSCIMNotFoundError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { InternalServerError as UpdateGroupSCIMInternalServerError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { BadGatewayError as UpdateGroupSCIMBadGatewayError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { GatewayTimeoutError as UpdateGroupSCIMGatewayTimeoutError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { InvalidParameterError as UpdateManagedPolicyInvalidParameterError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { UnauthorizedError as UpdateManagedPolicyUnauthorizedError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { NotFoundError as UpdateManagedPolicyNotFoundError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { InternalServerError as UpdateManagedPolicyInternalServerError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { BadGatewayError as UpdateManagedPolicyBadGatewayError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { GatewayTimeoutError as UpdateManagedPolicyGatewayTimeoutError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { InvalidParameterError as UpdatePasswordInvalidParameterError } from "./types/UpdatePassword/UpdatePasswordError";
import { UnauthorizedError as UpdatePasswordUnauthorizedError } from "./types/UpdatePassword/UpdatePasswordError";
import { InvalidAuthenticationModeError as UpdatePasswordInvalidAuthenticationModeError } from "./types/UpdatePassword/UpdatePasswordError";
import { PasswordDoesNotMatchError as UpdatePasswordPasswordDoesNotMatchError } from "./types/UpdatePassword/UpdatePasswordError";
import { NotFoundError as UpdatePasswordNotFoundError } from "./types/UpdatePassword/UpdatePasswordError";
import { InternalServerError as UpdatePasswordInternalServerError } from "./types/UpdatePassword/UpdatePasswordError";
import { BadGatewayError as UpdatePasswordBadGatewayError } from "./types/UpdatePassword/UpdatePasswordError";
import { GatewayTimeoutError as UpdatePasswordGatewayTimeoutError } from "./types/UpdatePassword/UpdatePasswordError";
import { InvalidParameterError as UpdatePolicyInvalidParameterError } from "./types/UpdatePolicy/UpdatePolicyError";
import { UnauthorizedError as UpdatePolicyUnauthorizedError } from "./types/UpdatePolicy/UpdatePolicyError";
import { NotFoundError as UpdatePolicyNotFoundError } from "./types/UpdatePolicy/UpdatePolicyError";
import { InternalServerError as UpdatePolicyInternalServerError } from "./types/UpdatePolicy/UpdatePolicyError";
import { BadGatewayError as UpdatePolicyBadGatewayError } from "./types/UpdatePolicy/UpdatePolicyError";
import { GatewayTimeoutError as UpdatePolicyGatewayTimeoutError } from "./types/UpdatePolicy/UpdatePolicyError";
import { InvalidParameterError as AcceptInvitationInvalidParameterError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InvalidInvitationError as AcceptInvitationInvalidInvitationError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InvalidInvitationSecretError as AcceptInvitationInvalidInvitationSecretError } from "./types/AcceptInvitation/AcceptInvitationError";
import { ExpiredInvitationError as AcceptInvitationExpiredInvitationError } from "./types/AcceptInvitation/AcceptInvitationError";
import { NotFoundError as AcceptInvitationNotFoundError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InternalServerError as AcceptInvitationInternalServerError } from "./types/AcceptInvitation/AcceptInvitationError";
import { BadGatewayError as AcceptInvitationBadGatewayError } from "./types/AcceptInvitation/AcceptInvitationError";
import { GatewayTimeoutError as AcceptInvitationGatewayTimeoutError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InvalidParameterError as AcceptUserInvitationInvalidParameterError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { InvalidInvitationError as AcceptUserInvitationInvalidInvitationError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { ExpiredInvitationError as AcceptUserInvitationExpiredInvitationError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { NotFoundError as AcceptUserInvitationNotFoundError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { InternalServerError as AcceptUserInvitationInternalServerError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { BadGatewayError as AcceptUserInvitationBadGatewayError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { GatewayTimeoutError as AcceptUserInvitationGatewayTimeoutError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { InvalidParameterError as AttachGroupRoleInvalidParameterError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { UnauthorizedError as AttachGroupRoleUnauthorizedError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { NotFoundError as AttachGroupRoleNotFoundError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { ConflictError as AttachGroupRoleConflictError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { InternalServerError as AttachGroupRoleInternalServerError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { BadGatewayError as AttachGroupRoleBadGatewayError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { GatewayTimeoutError as AttachGroupRoleGatewayTimeoutError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { InvalidParameterError as AttachGroupUserInvalidParameterError } from "./types/AttachGroupUser/AttachGroupUserError";
import { UnauthorizedError as AttachGroupUserUnauthorizedError } from "./types/AttachGroupUser/AttachGroupUserError";
import { NotFoundError as AttachGroupUserNotFoundError } from "./types/AttachGroupUser/AttachGroupUserError";
import { ConflictError as AttachGroupUserConflictError } from "./types/AttachGroupUser/AttachGroupUserError";
import { InternalServerError as AttachGroupUserInternalServerError } from "./types/AttachGroupUser/AttachGroupUserError";
import { BadGatewayError as AttachGroupUserBadGatewayError } from "./types/AttachGroupUser/AttachGroupUserError";
import { GatewayTimeoutError as AttachGroupUserGatewayTimeoutError } from "./types/AttachGroupUser/AttachGroupUserError";
import { InvalidParameterError as AttachRolePolicyInvalidParameterError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { UnauthorizedError as AttachRolePolicyUnauthorizedError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { NotFoundError as AttachRolePolicyNotFoundError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { ConflictError as AttachRolePolicyConflictError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { InternalServerError as AttachRolePolicyInternalServerError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { BadGatewayError as AttachRolePolicyBadGatewayError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { GatewayTimeoutError as AttachRolePolicyGatewayTimeoutError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { InvalidParameterError as AttachTeamGroupInvalidParameterError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { UnauthorizedError as AttachTeamGroupUnauthorizedError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { NotFoundError as AttachTeamGroupNotFoundError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { ConflictError as AttachTeamGroupConflictError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { InternalServerError as AttachTeamGroupInternalServerError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { BadGatewayError as AttachTeamGroupBadGatewayError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { GatewayTimeoutError as AttachTeamGroupGatewayTimeoutError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { InvalidParameterError as AttachTeamGroupRoleInvalidParameterError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { UnauthorizedError as AttachTeamGroupRoleUnauthorizedError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { NotFoundError as AttachTeamGroupRoleNotFoundError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { ConflictError as AttachTeamGroupRoleConflictError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { InternalServerError as AttachTeamGroupRoleInternalServerError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { BadGatewayError as AttachTeamGroupRoleBadGatewayError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { GatewayTimeoutError as AttachTeamGroupRoleGatewayTimeoutError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { InvalidParameterError as AttachTeamGroupUserInvalidParameterError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { UnauthorizedError as AttachTeamGroupUserUnauthorizedError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { NotFoundError as AttachTeamGroupUserNotFoundError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { ConflictError as AttachTeamGroupUserConflictError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { InternalServerError as AttachTeamGroupUserInternalServerError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { BadGatewayError as AttachTeamGroupUserBadGatewayError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { GatewayTimeoutError as AttachTeamGroupUserGatewayTimeoutError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { InvalidParameterError as AttachTeamRoleInvalidParameterError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { UnauthorizedError as AttachTeamRoleUnauthorizedError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { NotFoundError as AttachTeamRoleNotFoundError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { ConflictError as AttachTeamRoleConflictError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { InternalServerError as AttachTeamRoleInternalServerError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { BadGatewayError as AttachTeamRoleBadGatewayError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { GatewayTimeoutError as AttachTeamRoleGatewayTimeoutError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { InvalidParameterError as AttachTeamUserInvalidParameterError } from "./types/AttachTeamUser/AttachTeamUserError";
import { UnauthorizedError as AttachTeamUserUnauthorizedError } from "./types/AttachTeamUser/AttachTeamUserError";
import { NotFoundError as AttachTeamUserNotFoundError } from "./types/AttachTeamUser/AttachTeamUserError";
import { ConflictError as AttachTeamUserConflictError } from "./types/AttachTeamUser/AttachTeamUserError";
import { InternalServerError as AttachTeamUserInternalServerError } from "./types/AttachTeamUser/AttachTeamUserError";
import { BadGatewayError as AttachTeamUserBadGatewayError } from "./types/AttachTeamUser/AttachTeamUserError";
import { GatewayTimeoutError as AttachTeamUserGatewayTimeoutError } from "./types/AttachTeamUser/AttachTeamUserError";
import { InvalidParameterError as AttachTeamUserRoleInvalidParameterError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { UnauthorizedError as AttachTeamUserRoleUnauthorizedError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { NotFoundError as AttachTeamUserRoleNotFoundError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { ConflictError as AttachTeamUserRoleConflictError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { InternalServerError as AttachTeamUserRoleInternalServerError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { BadGatewayError as AttachTeamUserRoleBadGatewayError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { GatewayTimeoutError as AttachTeamUserRoleGatewayTimeoutError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { InvalidParameterError as AttachUserRoleInvalidParameterError } from "./types/AttachUserRole/AttachUserRoleError";
import { UnauthorizedError as AttachUserRoleUnauthorizedError } from "./types/AttachUserRole/AttachUserRoleError";
import { NotFoundError as AttachUserRoleNotFoundError } from "./types/AttachUserRole/AttachUserRoleError";
import { ConflictError as AttachUserRoleConflictError } from "./types/AttachUserRole/AttachUserRoleError";
import { InternalServerError as AttachUserRoleInternalServerError } from "./types/AttachUserRole/AttachUserRoleError";
import { BadGatewayError as AttachUserRoleBadGatewayError } from "./types/AttachUserRole/AttachUserRoleError";
import { GatewayTimeoutError as AttachUserRoleGatewayTimeoutError } from "./types/AttachUserRole/AttachUserRoleError";
import { InvalidParameterError as ChangePasswordInvalidParameterError } from "./types/ChangePassword/ChangePasswordError";
import { InvalidForgotPasswordError as ChangePasswordInvalidForgotPasswordError } from "./types/ChangePassword/ChangePasswordError";
import { ExpiredPasswordSecretError as ChangePasswordExpiredPasswordSecretError } from "./types/ChangePassword/ChangePasswordError";
import { InvalidForgotPasswordSecretError as ChangePasswordInvalidForgotPasswordSecretError } from "./types/ChangePassword/ChangePasswordError";
import { NotFoundError as ChangePasswordNotFoundError } from "./types/ChangePassword/ChangePasswordError";
import { InternalServerError as ChangePasswordInternalServerError } from "./types/ChangePassword/ChangePasswordError";
import { BadGatewayError as ChangePasswordBadGatewayError } from "./types/ChangePassword/ChangePasswordError";
import { GatewayTimeoutError as ChangePasswordGatewayTimeoutError } from "./types/ChangePassword/ChangePasswordError";
import { InvalidParameterError as CreateAccountInvalidParameterError } from "./types/CreateAccount/CreateAccountError";
import { NotFoundError as CreateAccountNotFoundError } from "./types/CreateAccount/CreateAccountError";
import { ConflictError as CreateAccountConflictError } from "./types/CreateAccount/CreateAccountError";
import { InternalServerError as CreateAccountInternalServerError } from "./types/CreateAccount/CreateAccountError";
import { BadGatewayError as CreateAccountBadGatewayError } from "./types/CreateAccount/CreateAccountError";
import { GatewayTimeoutError as CreateAccountGatewayTimeoutError } from "./types/CreateAccount/CreateAccountError";
import { InvalidParameterError as CreateGroupInvalidParameterError } from "./types/CreateGroup/CreateGroupError";
import { UnauthorizedError as CreateGroupUnauthorizedError } from "./types/CreateGroup/CreateGroupError";
import { ConflictError as CreateGroupConflictError } from "./types/CreateGroup/CreateGroupError";
import { InternalServerError as CreateGroupInternalServerError } from "./types/CreateGroup/CreateGroupError";
import { BadGatewayError as CreateGroupBadGatewayError } from "./types/CreateGroup/CreateGroupError";
import { GatewayTimeoutError as CreateGroupGatewayTimeoutError } from "./types/CreateGroup/CreateGroupError";
import { InvalidParameterError as CreateGroupSCIMInvalidParameterError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { UnauthorizedError as CreateGroupSCIMUnauthorizedError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { NotFoundError as CreateGroupSCIMNotFoundError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { ConflictError as CreateGroupSCIMConflictError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { InternalServerError as CreateGroupSCIMInternalServerError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { BadGatewayError as CreateGroupSCIMBadGatewayError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { GatewayTimeoutError as CreateGroupSCIMGatewayTimeoutError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { InvalidParameterError as CreatePolicyInvalidParameterError } from "./types/CreatePolicy/CreatePolicyError";
import { UnauthorizedError as CreatePolicyUnauthorizedError } from "./types/CreatePolicy/CreatePolicyError";
import { ConflictError as CreatePolicyConflictError } from "./types/CreatePolicy/CreatePolicyError";
import { InternalServerError as CreatePolicyInternalServerError } from "./types/CreatePolicy/CreatePolicyError";
import { BadGatewayError as CreatePolicyBadGatewayError } from "./types/CreatePolicy/CreatePolicyError";
import { GatewayTimeoutError as CreatePolicyGatewayTimeoutError } from "./types/CreatePolicy/CreatePolicyError";
import { InvalidParameterError as CreateProviderInvalidParameterError } from "./types/CreateProvider/CreateProviderError";
import { UnauthorizedError as CreateProviderUnauthorizedError } from "./types/CreateProvider/CreateProviderError";
import { InvalidCertificateError as CreateProviderInvalidCertificateError } from "./types/CreateProvider/CreateProviderError";
import { ConflictError as CreateProviderConflictError } from "./types/CreateProvider/CreateProviderError";
import { InternalServerError as CreateProviderInternalServerError } from "./types/CreateProvider/CreateProviderError";
import { BadGatewayError as CreateProviderBadGatewayError } from "./types/CreateProvider/CreateProviderError";
import { GatewayTimeoutError as CreateProviderGatewayTimeoutError } from "./types/CreateProvider/CreateProviderError";
import { InvalidParameterError as CreateRoleInvalidParameterError } from "./types/CreateRole/CreateRoleError";
import { UnauthorizedError as CreateRoleUnauthorizedError } from "./types/CreateRole/CreateRoleError";
import { ConflictError as CreateRoleConflictError } from "./types/CreateRole/CreateRoleError";
import { InternalServerError as CreateRoleInternalServerError } from "./types/CreateRole/CreateRoleError";
import { BadGatewayError as CreateRoleBadGatewayError } from "./types/CreateRole/CreateRoleError";
import { GatewayTimeoutError as CreateRoleGatewayTimeoutError } from "./types/CreateRole/CreateRoleError";
import { InvalidParameterError as CreateTeamInvalidParameterError } from "./types/CreateTeam/CreateTeamError";
import { UnauthorizedError as CreateTeamUnauthorizedError } from "./types/CreateTeam/CreateTeamError";
import { ConflictError as CreateTeamConflictError } from "./types/CreateTeam/CreateTeamError";
import { InternalServerError as CreateTeamInternalServerError } from "./types/CreateTeam/CreateTeamError";
import { BadGatewayError as CreateTeamBadGatewayError } from "./types/CreateTeam/CreateTeamError";
import { GatewayTimeoutError as CreateTeamGatewayTimeoutError } from "./types/CreateTeam/CreateTeamError";
import { InvalidParameterError as CreateTokenInvalidParameterError } from "./types/CreateToken/CreateTokenError";
import { InvalidCredentialsError as CreateTokenInvalidCredentialsError } from "./types/CreateToken/CreateTokenError";
import { PasswordRevokedError as CreateTokenPasswordRevokedError } from "./types/CreateToken/CreateTokenError";
import { IdentityDisabledError as CreateTokenIdentityDisabledError } from "./types/CreateToken/CreateTokenError";
import { InvalidAuthenticationModeError as CreateTokenInvalidAuthenticationModeError } from "./types/CreateToken/CreateTokenError";
import { NotFoundError as CreateTokenNotFoundError } from "./types/CreateToken/CreateTokenError";
import { ConflictError as CreateTokenConflictError } from "./types/CreateToken/CreateTokenError";
import { InternalServerError as CreateTokenInternalServerError } from "./types/CreateToken/CreateTokenError";
import { BadGatewayError as CreateTokenBadGatewayError } from "./types/CreateToken/CreateTokenError";
import { GatewayTimeoutError as CreateTokenGatewayTimeoutError } from "./types/CreateToken/CreateTokenError";
import { InvalidParameterError as CreateUserInvalidParameterError } from "./types/CreateUser/CreateUserError";
import { UnauthorizedError as CreateUserUnauthorizedError } from "./types/CreateUser/CreateUserError";
import { InvalidSubscriptionError as CreateUserInvalidSubscriptionError } from "./types/CreateUser/CreateUserError";
import { ConflictError as CreateUserConflictError } from "./types/CreateUser/CreateUserError";
import { InternalServerError as CreateUserInternalServerError } from "./types/CreateUser/CreateUserError";
import { BadGatewayError as CreateUserBadGatewayError } from "./types/CreateUser/CreateUserError";
import { GatewayTimeoutError as CreateUserGatewayTimeoutError } from "./types/CreateUser/CreateUserError";
import { InvalidParameterError as CreateUserSCIMInvalidParameterError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { UnauthorizedError as CreateUserSCIMUnauthorizedError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { NotFoundError as CreateUserSCIMNotFoundError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { ConflictError as CreateUserSCIMConflictError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { InternalServerError as CreateUserSCIMInternalServerError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { BadGatewayError as CreateUserSCIMBadGatewayError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { GatewayTimeoutError as CreateUserSCIMGatewayTimeoutError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { InvalidParameterError as CreateUserTokenInvalidParameterError } from "./types/CreateUserToken/CreateUserTokenError";
import { UnauthorizedError as CreateUserTokenUnauthorizedError } from "./types/CreateUserToken/CreateUserTokenError";
import { IdentityDisabledError as CreateUserTokenIdentityDisabledError } from "./types/CreateUserToken/CreateUserTokenError";
import { NotFoundError as CreateUserTokenNotFoundError } from "./types/CreateUserToken/CreateUserTokenError";
import { ConflictError as CreateUserTokenConflictError } from "./types/CreateUserToken/CreateUserTokenError";
import { InternalServerError as CreateUserTokenInternalServerError } from "./types/CreateUserToken/CreateUserTokenError";
import { BadGatewayError as CreateUserTokenBadGatewayError } from "./types/CreateUserToken/CreateUserTokenError";
import { GatewayTimeoutError as CreateUserTokenGatewayTimeoutError } from "./types/CreateUserToken/CreateUserTokenError";
import { UnauthorizedError as DeleteAccountUnauthorizedError } from "./types/DeleteAccount/DeleteAccountError";
import { NotFoundError as DeleteAccountNotFoundError } from "./types/DeleteAccount/DeleteAccountError";
import { InternalServerError as DeleteAccountInternalServerError } from "./types/DeleteAccount/DeleteAccountError";
import { BadGatewayError as DeleteAccountBadGatewayError } from "./types/DeleteAccount/DeleteAccountError";
import { GatewayTimeoutError as DeleteAccountGatewayTimeoutError } from "./types/DeleteAccount/DeleteAccountError";
import { InvalidParameterError as DeleteGroupInvalidParameterError } from "./types/DeleteGroup/DeleteGroupError";
import { UnauthorizedError as DeleteGroupUnauthorizedError } from "./types/DeleteGroup/DeleteGroupError";
import { ForbiddenError as DeleteGroupForbiddenError } from "./types/DeleteGroup/DeleteGroupError";
import { NotFoundError as DeleteGroupNotFoundError } from "./types/DeleteGroup/DeleteGroupError";
import { InternalServerError as DeleteGroupInternalServerError } from "./types/DeleteGroup/DeleteGroupError";
import { BadGatewayError as DeleteGroupBadGatewayError } from "./types/DeleteGroup/DeleteGroupError";
import { GatewayTimeoutError as DeleteGroupGatewayTimeoutError } from "./types/DeleteGroup/DeleteGroupError";
import { InvalidParameterError as DeleteGroupSCIMInvalidParameterError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { UnauthorizedError as DeleteGroupSCIMUnauthorizedError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { NotFoundError as DeleteGroupSCIMNotFoundError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { InternalServerError as DeleteGroupSCIMInternalServerError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { BadGatewayError as DeleteGroupSCIMBadGatewayError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { GatewayTimeoutError as DeleteGroupSCIMGatewayTimeoutError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { InvalidParameterError as DeletePolicyInvalidParameterError } from "./types/DeletePolicy/DeletePolicyError";
import { UnauthorizedError as DeletePolicyUnauthorizedError } from "./types/DeletePolicy/DeletePolicyError";
import { ForbiddenError as DeletePolicyForbiddenError } from "./types/DeletePolicy/DeletePolicyError";
import { NotFoundError as DeletePolicyNotFoundError } from "./types/DeletePolicy/DeletePolicyError";
import { InternalServerError as DeletePolicyInternalServerError } from "./types/DeletePolicy/DeletePolicyError";
import { BadGatewayError as DeletePolicyBadGatewayError } from "./types/DeletePolicy/DeletePolicyError";
import { GatewayTimeoutError as DeletePolicyGatewayTimeoutError } from "./types/DeletePolicy/DeletePolicyError";
import { InvalidParameterError as DeleteProviderInvalidParameterError } from "./types/DeleteProvider/DeleteProviderError";
import { UnauthorizedError as DeleteProviderUnauthorizedError } from "./types/DeleteProvider/DeleteProviderError";
import { NotFoundError as DeleteProviderNotFoundError } from "./types/DeleteProvider/DeleteProviderError";
import { InternalServerError as DeleteProviderInternalServerError } from "./types/DeleteProvider/DeleteProviderError";
import { BadGatewayError as DeleteProviderBadGatewayError } from "./types/DeleteProvider/DeleteProviderError";
import { GatewayTimeoutError as DeleteProviderGatewayTimeoutError } from "./types/DeleteProvider/DeleteProviderError";
import { InvalidParameterError as DeleteRoleInvalidParameterError } from "./types/DeleteRole/DeleteRoleError";
import { UnauthorizedError as DeleteRoleUnauthorizedError } from "./types/DeleteRole/DeleteRoleError";
import { ForbiddenError as DeleteRoleForbiddenError } from "./types/DeleteRole/DeleteRoleError";
import { NotFoundError as DeleteRoleNotFoundError } from "./types/DeleteRole/DeleteRoleError";
import { InternalServerError as DeleteRoleInternalServerError } from "./types/DeleteRole/DeleteRoleError";
import { BadGatewayError as DeleteRoleBadGatewayError } from "./types/DeleteRole/DeleteRoleError";
import { GatewayTimeoutError as DeleteRoleGatewayTimeoutError } from "./types/DeleteRole/DeleteRoleError";
import { InvalidParameterError as DeleteTeamInvalidParameterError } from "./types/DeleteTeam/DeleteTeamError";
import { UnauthorizedError as DeleteTeamUnauthorizedError } from "./types/DeleteTeam/DeleteTeamError";
import { ForbiddenError as DeleteTeamForbiddenError } from "./types/DeleteTeam/DeleteTeamError";
import { NotFoundError as DeleteTeamNotFoundError } from "./types/DeleteTeam/DeleteTeamError";
import { InternalServerError as DeleteTeamInternalServerError } from "./types/DeleteTeam/DeleteTeamError";
import { BadGatewayError as DeleteTeamBadGatewayError } from "./types/DeleteTeam/DeleteTeamError";
import { GatewayTimeoutError as DeleteTeamGatewayTimeoutError } from "./types/DeleteTeam/DeleteTeamError";
import { InvalidParameterError as DeleteUserInvalidParameterError } from "./types/DeleteUser/DeleteUserError";
import { UnauthorizedError as DeleteUserUnauthorizedError } from "./types/DeleteUser/DeleteUserError";
import { ForbiddenError as DeleteUserForbiddenError } from "./types/DeleteUser/DeleteUserError";
import { NotFoundError as DeleteUserNotFoundError } from "./types/DeleteUser/DeleteUserError";
import { InternalServerError as DeleteUserInternalServerError } from "./types/DeleteUser/DeleteUserError";
import { BadGatewayError as DeleteUserBadGatewayError } from "./types/DeleteUser/DeleteUserError";
import { GatewayTimeoutError as DeleteUserGatewayTimeoutError } from "./types/DeleteUser/DeleteUserError";
import { InvalidParameterError as DeleteUserSCIMInvalidParameterError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { UnauthorizedError as DeleteUserSCIMUnauthorizedError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { NotFoundError as DeleteUserSCIMNotFoundError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { InternalServerError as DeleteUserSCIMInternalServerError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { BadGatewayError as DeleteUserSCIMBadGatewayError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { GatewayTimeoutError as DeleteUserSCIMGatewayTimeoutError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { InvalidParameterError as DetachGroupRoleInvalidParameterError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { UnauthorizedError as DetachGroupRoleUnauthorizedError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { NotFoundError as DetachGroupRoleNotFoundError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { InternalServerError as DetachGroupRoleInternalServerError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { BadGatewayError as DetachGroupRoleBadGatewayError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { GatewayTimeoutError as DetachGroupRoleGatewayTimeoutError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { InvalidParameterError as DetachGroupUserInvalidParameterError } from "./types/DetachGroupUser/DetachGroupUserError";
import { UnauthorizedError as DetachGroupUserUnauthorizedError } from "./types/DetachGroupUser/DetachGroupUserError";
import { NotFoundError as DetachGroupUserNotFoundError } from "./types/DetachGroupUser/DetachGroupUserError";
import { InternalServerError as DetachGroupUserInternalServerError } from "./types/DetachGroupUser/DetachGroupUserError";
import { BadGatewayError as DetachGroupUserBadGatewayError } from "./types/DetachGroupUser/DetachGroupUserError";
import { GatewayTimeoutError as DetachGroupUserGatewayTimeoutError } from "./types/DetachGroupUser/DetachGroupUserError";
import { InvalidParameterError as DetachRolePolicyInvalidParameterError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { UnauthorizedError as DetachRolePolicyUnauthorizedError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { NotFoundError as DetachRolePolicyNotFoundError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { InternalServerError as DetachRolePolicyInternalServerError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { BadGatewayError as DetachRolePolicyBadGatewayError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { GatewayTimeoutError as DetachRolePolicyGatewayTimeoutError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { InvalidParameterError as DetachTeamGroupInvalidParameterError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { UnauthorizedError as DetachTeamGroupUnauthorizedError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { NotFoundError as DetachTeamGroupNotFoundError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { InternalServerError as DetachTeamGroupInternalServerError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { BadGatewayError as DetachTeamGroupBadGatewayError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { GatewayTimeoutError as DetachTeamGroupGatewayTimeoutError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { InvalidParameterError as DetachTeamGroupRoleInvalidParameterError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { UnauthorizedError as DetachTeamGroupRoleUnauthorizedError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { NotFoundError as DetachTeamGroupRoleNotFoundError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { InternalServerError as DetachTeamGroupRoleInternalServerError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { BadGatewayError as DetachTeamGroupRoleBadGatewayError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { GatewayTimeoutError as DetachTeamGroupRoleGatewayTimeoutError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { InvalidParameterError as DetachTeamGroupUserInvalidParameterError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { UnauthorizedError as DetachTeamGroupUserUnauthorizedError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { NotFoundError as DetachTeamGroupUserNotFoundError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { InternalServerError as DetachTeamGroupUserInternalServerError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { BadGatewayError as DetachTeamGroupUserBadGatewayError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { GatewayTimeoutError as DetachTeamGroupUserGatewayTimeoutError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { InvalidParameterError as DetachTeamRoleInvalidParameterError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { UnauthorizedError as DetachTeamRoleUnauthorizedError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { NotFoundError as DetachTeamRoleNotFoundError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { InternalServerError as DetachTeamRoleInternalServerError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { BadGatewayError as DetachTeamRoleBadGatewayError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { GatewayTimeoutError as DetachTeamRoleGatewayTimeoutError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { InvalidParameterError as DetachTeamUserInvalidParameterError } from "./types/DetachTeamUser/DetachTeamUserError";
import { UnauthorizedError as DetachTeamUserUnauthorizedError } from "./types/DetachTeamUser/DetachTeamUserError";
import { NotFoundError as DetachTeamUserNotFoundError } from "./types/DetachTeamUser/DetachTeamUserError";
import { InternalServerError as DetachTeamUserInternalServerError } from "./types/DetachTeamUser/DetachTeamUserError";
import { BadGatewayError as DetachTeamUserBadGatewayError } from "./types/DetachTeamUser/DetachTeamUserError";
import { GatewayTimeoutError as DetachTeamUserGatewayTimeoutError } from "./types/DetachTeamUser/DetachTeamUserError";
import { InvalidParameterError as DetachTeamUserRoleInvalidParameterError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { UnauthorizedError as DetachTeamUserRoleUnauthorizedError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { NotFoundError as DetachTeamUserRoleNotFoundError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { InternalServerError as DetachTeamUserRoleInternalServerError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { BadGatewayError as DetachTeamUserRoleBadGatewayError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { GatewayTimeoutError as DetachTeamUserRoleGatewayTimeoutError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { InvalidParameterError as DetachUserRoleInvalidParameterError } from "./types/DetachUserRole/DetachUserRoleError";
import { UnauthorizedError as DetachUserRoleUnauthorizedError } from "./types/DetachUserRole/DetachUserRoleError";
import { NotFoundError as DetachUserRoleNotFoundError } from "./types/DetachUserRole/DetachUserRoleError";
import { InternalServerError as DetachUserRoleInternalServerError } from "./types/DetachUserRole/DetachUserRoleError";
import { BadGatewayError as DetachUserRoleBadGatewayError } from "./types/DetachUserRole/DetachUserRoleError";
import { GatewayTimeoutError as DetachUserRoleGatewayTimeoutError } from "./types/DetachUserRole/DetachUserRoleError";
import { InvalidParameterError as ForgotPasswordInvalidParameterError } from "./types/ForgotPassword/ForgotPasswordError";
import { InvalidIdentityUsernameError as ForgotPasswordInvalidIdentityUsernameError } from "./types/ForgotPassword/ForgotPasswordError";
import { NotFoundError as ForgotPasswordNotFoundError } from "./types/ForgotPassword/ForgotPasswordError";
import { InternalServerError as ForgotPasswordInternalServerError } from "./types/ForgotPassword/ForgotPasswordError";
import { BadGatewayError as ForgotPasswordBadGatewayError } from "./types/ForgotPassword/ForgotPasswordError";
import { GatewayTimeoutError as ForgotPasswordGatewayTimeoutError } from "./types/ForgotPassword/ForgotPasswordError";
import { UnauthorizedError as GetAccountUnauthorizedError } from "./types/GetAccount/GetAccountError";
import { NotFoundError as GetAccountNotFoundError } from "./types/GetAccount/GetAccountError";
import { InternalServerError as GetAccountInternalServerError } from "./types/GetAccount/GetAccountError";
import { BadGatewayError as GetAccountBadGatewayError } from "./types/GetAccount/GetAccountError";
import { GatewayTimeoutError as GetAccountGatewayTimeoutError } from "./types/GetAccount/GetAccountError";
import { InvalidParameterError as GetGroupInvalidParameterError } from "./types/GetGroup/GetGroupError";
import { UnauthorizedError as GetGroupUnauthorizedError } from "./types/GetGroup/GetGroupError";
import { NotFoundError as GetGroupNotFoundError } from "./types/GetGroup/GetGroupError";
import { InternalServerError as GetGroupInternalServerError } from "./types/GetGroup/GetGroupError";
import { BadGatewayError as GetGroupBadGatewayError } from "./types/GetGroup/GetGroupError";
import { GatewayTimeoutError as GetGroupGatewayTimeoutError } from "./types/GetGroup/GetGroupError";
import { InvalidParameterError as GetGroupSCIMInvalidParameterError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { UnauthorizedError as GetGroupSCIMUnauthorizedError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { NotFoundError as GetGroupSCIMNotFoundError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { InternalServerError as GetGroupSCIMInternalServerError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { BadGatewayError as GetGroupSCIMBadGatewayError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { GatewayTimeoutError as GetGroupSCIMGatewayTimeoutError } from "./types/GetGroupSCIM/GetGroupSCIMError";

export const errors = {
    UpdateProviderError: {
        InvalidParameterError: UpdateProviderInvalidParameterError,
        UnauthorizedError: UpdateProviderUnauthorizedError,
        InvalidCertificateError: UpdateProviderInvalidCertificateError,
        NotFoundError: UpdateProviderNotFoundError,
        InternalServerError: UpdateProviderInternalServerError,
        BadGatewayError: UpdateProviderBadGatewayError,
        GatewayTimeoutError: UpdateProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateRoleError: {
        InvalidParameterError: UpdateRoleInvalidParameterError,
        UnauthorizedError: UpdateRoleUnauthorizedError,
        NotFoundError: UpdateRoleNotFoundError,
        InternalServerError: UpdateRoleInternalServerError,
        BadGatewayError: UpdateRoleBadGatewayError,
        GatewayTimeoutError: UpdateRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTeamError: {
        InvalidParameterError: UpdateTeamInvalidParameterError,
        UnauthorizedError: UpdateTeamUnauthorizedError,
        NotFoundError: UpdateTeamNotFoundError,
        InternalServerError: UpdateTeamInternalServerError,
        BadGatewayError: UpdateTeamBadGatewayError,
        GatewayTimeoutError: UpdateTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTeamGroupError: {
        InvalidParameterError: UpdateTeamGroupInvalidParameterError,
        UnauthorizedError: UpdateTeamGroupUnauthorizedError,
        NotFoundError: UpdateTeamGroupNotFoundError,
        InternalServerError: UpdateTeamGroupInternalServerError,
        BadGatewayError: UpdateTeamGroupBadGatewayError,
        GatewayTimeoutError: UpdateTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTeamUserError: {
        InvalidParameterError: UpdateTeamUserInvalidParameterError,
        UnauthorizedError: UpdateTeamUserUnauthorizedError,
        InvalidSubscriptionError: UpdateTeamUserInvalidSubscriptionError,
        ForbiddenToUpdateProvisionedUserError: UpdateTeamUserForbiddenToUpdateProvisionedUserError,
        NotFoundError: UpdateTeamUserNotFoundError,
        ConflictError: UpdateTeamUserConflictError,
        InternalServerError: UpdateTeamUserInternalServerError,
        BadGatewayError: UpdateTeamUserBadGatewayError,
        GatewayTimeoutError: UpdateTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateUserError: {
        InvalidParameterError: UpdateUserInvalidParameterError,
        UnauthorizedError: UpdateUserUnauthorizedError,
        ForbiddenToUpdateProvisionedUserError: UpdateUserForbiddenToUpdateProvisionedUserError,
        InvalidSubscriptionError: UpdateUserInvalidSubscriptionError,
        NotFoundError: UpdateUserNotFoundError,
        InternalServerError: UpdateUserInternalServerError,
        BadGatewayError: UpdateUserBadGatewayError,
        GatewayTimeoutError: UpdateUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateUserSCIMError: {
        InvalidParameterError: UpdateUserSCIMInvalidParameterError,
        UnauthorizedError: UpdateUserSCIMUnauthorizedError,
        NotFoundError: UpdateUserSCIMNotFoundError,
        InternalServerError: UpdateUserSCIMInternalServerError,
        BadGatewayError: UpdateUserSCIMBadGatewayError,
        GatewayTimeoutError: UpdateUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetPolicyError: {
        InvalidParameterError: GetPolicyInvalidParameterError,
        UnauthorizedError: GetPolicyUnauthorizedError,
        NotFoundError: GetPolicyNotFoundError,
        InternalServerError: GetPolicyInternalServerError,
        BadGatewayError: GetPolicyBadGatewayError,
        GatewayTimeoutError: GetPolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetProviderError: {
        InvalidParameterError: GetProviderInvalidParameterError,
        UnauthorizedError: GetProviderUnauthorizedError,
        NotFoundError: GetProviderNotFoundError,
        InternalServerError: GetProviderInternalServerError,
        BadGatewayError: GetProviderBadGatewayError,
        GatewayTimeoutError: GetProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetResourceTypesError: {
        UnauthorizedError: GetResourceTypesUnauthorizedError,
        InternalServerError: GetResourceTypesInternalServerError,
        BadGatewayError: GetResourceTypesBadGatewayError,
        GatewayTimeoutError: GetResourceTypesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetRoleError: {
        InvalidParameterError: GetRoleInvalidParameterError,
        UnauthorizedError: GetRoleUnauthorizedError,
        NotFoundError: GetRoleNotFoundError,
        InternalServerError: GetRoleInternalServerError,
        BadGatewayError: GetRoleBadGatewayError,
        GatewayTimeoutError: GetRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetSchemasError: {
        UnauthorizedError: GetSchemasUnauthorizedError,
        InternalServerError: GetSchemasInternalServerError,
        BadGatewayError: GetSchemasBadGatewayError,
        GatewayTimeoutError: GetSchemasGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetServiceProviderConfigError: {
        UnauthorizedError: GetServiceProviderConfigUnauthorizedError,
        InternalServerError: GetServiceProviderConfigInternalServerError,
        BadGatewayError: GetServiceProviderConfigBadGatewayError,
        GatewayTimeoutError: GetServiceProviderConfigGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetSigninConfigurationError: {
        InvalidParameterError: GetSigninConfigurationInvalidParameterError,
        NotFoundError: GetSigninConfigurationNotFoundError,
        InternalServerError: GetSigninConfigurationInternalServerError,
        BadGatewayError: GetSigninConfigurationBadGatewayError,
        GatewayTimeoutError: GetSigninConfigurationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamError: {
        InvalidParameterError: GetTeamInvalidParameterError,
        UnauthorizedError: GetTeamUnauthorizedError,
        NotFoundError: GetTeamNotFoundError,
        InternalServerError: GetTeamInternalServerError,
        BadGatewayError: GetTeamBadGatewayError,
        GatewayTimeoutError: GetTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamGroupError: {
        InvalidParameterError: GetTeamGroupInvalidParameterError,
        UnauthorizedError: GetTeamGroupUnauthorizedError,
        NotFoundError: GetTeamGroupNotFoundError,
        InternalServerError: GetTeamGroupInternalServerError,
        BadGatewayError: GetTeamGroupBadGatewayError,
        GatewayTimeoutError: GetTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamUserError: {
        InvalidParameterError: GetTeamUserInvalidParameterError,
        UnauthorizedError: GetTeamUserUnauthorizedError,
        NotFoundError: GetTeamUserNotFoundError,
        InternalServerError: GetTeamUserInternalServerError,
        BadGatewayError: GetTeamUserBadGatewayError,
        GatewayTimeoutError: GetTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserError: {
        InvalidParameterError: GetUserInvalidParameterError,
        UnauthorizedError: GetUserUnauthorizedError,
        NotFoundError: GetUserNotFoundError,
        InternalServerError: GetUserInternalServerError,
        BadGatewayError: GetUserBadGatewayError,
        GatewayTimeoutError: GetUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserSCIMError: {
        InvalidParameterError: GetUserSCIMInvalidParameterError,
        UnauthorizedError: GetUserSCIMUnauthorizedError,
        NotFoundError: GetUserSCIMNotFoundError,
        InternalServerError: GetUserSCIMInternalServerError,
        BadGatewayError: GetUserSCIMBadGatewayError,
        GatewayTimeoutError: GetUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InviteTeamUserError: {
        InvalidParameterError: InviteTeamUserInvalidParameterError,
        UnauthorizedError: InviteTeamUserUnauthorizedError,
        NotFoundError: InviteTeamUserNotFoundError,
        InternalServerError: InviteTeamUserInternalServerError,
        BadGatewayError: InviteTeamUserBadGatewayError,
        GatewayTimeoutError: InviteTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InviteUserError: {
        InvalidParameterError: InviteUserInvalidParameterError,
        UnauthorizedError: InviteUserUnauthorizedError,
        InvalidEmailError: InviteUserInvalidEmailError,
        NotFoundError: InviteUserNotFoundError,
        InternalServerError: InviteUserInternalServerError,
        BadGatewayError: InviteUserBadGatewayError,
        GatewayTimeoutError: InviteUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupRolesError: {
        InvalidParameterError: ListGroupRolesInvalidParameterError,
        UnauthorizedError: ListGroupRolesUnauthorizedError,
        NotFoundError: ListGroupRolesNotFoundError,
        InternalServerError: ListGroupRolesInternalServerError,
        BadGatewayError: ListGroupRolesBadGatewayError,
        GatewayTimeoutError: ListGroupRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupTeamsError: {
        InvalidParameterError: ListGroupTeamsInvalidParameterError,
        UnauthorizedError: ListGroupTeamsUnauthorizedError,
        NotFoundError: ListGroupTeamsNotFoundError,
        InternalServerError: ListGroupTeamsInternalServerError,
        BadGatewayError: ListGroupTeamsBadGatewayError,
        GatewayTimeoutError: ListGroupTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupUsersError: {
        InvalidParameterError: ListGroupUsersInvalidParameterError,
        UnauthorizedError: ListGroupUsersUnauthorizedError,
        NotFoundError: ListGroupUsersNotFoundError,
        InternalServerError: ListGroupUsersInternalServerError,
        BadGatewayError: ListGroupUsersBadGatewayError,
        GatewayTimeoutError: ListGroupUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupsError: {
        UnauthorizedError: ListGroupsUnauthorizedError,
        NotFoundError: ListGroupsNotFoundError,
        InternalServerError: ListGroupsInternalServerError,
        BadGatewayError: ListGroupsBadGatewayError,
        GatewayTimeoutError: ListGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupsSCIMError: {
        InvalidParameterError: ListGroupsSCIMInvalidParameterError,
        UnauthorizedError: ListGroupsSCIMUnauthorizedError,
        InternalServerError: ListGroupsSCIMInternalServerError,
        BadGatewayError: ListGroupsSCIMBadGatewayError,
        GatewayTimeoutError: ListGroupsSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListPoliciesError: {
        UnauthorizedError: ListPoliciesUnauthorizedError,
        InternalServerError: ListPoliciesInternalServerError,
        BadGatewayError: ListPoliciesBadGatewayError,
        GatewayTimeoutError: ListPoliciesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListProvidersError: {
        UnauthorizedError: ListProvidersUnauthorizedError,
        InternalServerError: ListProvidersInternalServerError,
        BadGatewayError: ListProvidersBadGatewayError,
        GatewayTimeoutError: ListProvidersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListRolesError: {
        UnauthorizedError: ListRolesUnauthorizedError,
        InternalServerError: ListRolesInternalServerError,
        BadGatewayError: ListRolesBadGatewayError,
        GatewayTimeoutError: ListRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamGroupRolesError: {
        InvalidParameterError: ListTeamGroupRolesInvalidParameterError,
        UnauthorizedError: ListTeamGroupRolesUnauthorizedError,
        NotFoundError: ListTeamGroupRolesNotFoundError,
        InternalServerError: ListTeamGroupRolesInternalServerError,
        BadGatewayError: ListTeamGroupRolesBadGatewayError,
        GatewayTimeoutError: ListTeamGroupRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamGroupUsersError: {
        InvalidParameterError: ListTeamGroupUsersInvalidParameterError,
        UnauthorizedError: ListTeamGroupUsersUnauthorizedError,
        NotFoundError: ListTeamGroupUsersNotFoundError,
        InternalServerError: ListTeamGroupUsersInternalServerError,
        BadGatewayError: ListTeamGroupUsersBadGatewayError,
        GatewayTimeoutError: ListTeamGroupUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamGroupsError: {
        InvalidParameterError: ListTeamGroupsInvalidParameterError,
        UnauthorizedError: ListTeamGroupsUnauthorizedError,
        NotFoundError: ListTeamGroupsNotFoundError,
        InternalServerError: ListTeamGroupsInternalServerError,
        BadGatewayError: ListTeamGroupsBadGatewayError,
        GatewayTimeoutError: ListTeamGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamRolesError: {
        InvalidParameterError: ListTeamRolesInvalidParameterError,
        UnauthorizedError: ListTeamRolesUnauthorizedError,
        NotFoundError: ListTeamRolesNotFoundError,
        InternalServerError: ListTeamRolesInternalServerError,
        BadGatewayError: ListTeamRolesBadGatewayError,
        GatewayTimeoutError: ListTeamRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUserGroupsError: {
        InvalidParameterError: ListTeamUserGroupsInvalidParameterError,
        UnauthorizedError: ListTeamUserGroupsUnauthorizedError,
        NotFoundError: ListTeamUserGroupsNotFoundError,
        InternalServerError: ListTeamUserGroupsInternalServerError,
        BadGatewayError: ListTeamUserGroupsBadGatewayError,
        GatewayTimeoutError: ListTeamUserGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUserRolesError: {
        InvalidParameterError: ListTeamUserRolesInvalidParameterError,
        UnauthorizedError: ListTeamUserRolesUnauthorizedError,
        NotFoundError: ListTeamUserRolesNotFoundError,
        InternalServerError: ListTeamUserRolesInternalServerError,
        BadGatewayError: ListTeamUserRolesBadGatewayError,
        GatewayTimeoutError: ListTeamUserRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUsersError: {
        InvalidParameterError: ListTeamUsersInvalidParameterError,
        UnauthorizedError: ListTeamUsersUnauthorizedError,
        NotFoundError: ListTeamUsersNotFoundError,
        InternalServerError: ListTeamUsersInternalServerError,
        BadGatewayError: ListTeamUsersBadGatewayError,
        GatewayTimeoutError: ListTeamUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamsError: {
        UnauthorizedError: ListTeamsUnauthorizedError,
        InternalServerError: ListTeamsInternalServerError,
        BadGatewayError: ListTeamsBadGatewayError,
        GatewayTimeoutError: ListTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserGroupsError: {
        InvalidParameterError: ListUserGroupsInvalidParameterError,
        UnauthorizedError: ListUserGroupsUnauthorizedError,
        NotFoundError: ListUserGroupsNotFoundError,
        InternalServerError: ListUserGroupsInternalServerError,
        BadGatewayError: ListUserGroupsBadGatewayError,
        GatewayTimeoutError: ListUserGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserGroupsRolesError: {
        InvalidParameterError: ListUserGroupsRolesInvalidParameterError,
        UnauthorizedError: ListUserGroupsRolesUnauthorizedError,
        NotFoundError: ListUserGroupsRolesNotFoundError,
        InternalServerError: ListUserGroupsRolesInternalServerError,
        BadGatewayError: ListUserGroupsRolesBadGatewayError,
        GatewayTimeoutError: ListUserGroupsRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserGroupsTeamsError: {
        InvalidParameterError: ListUserGroupsTeamsInvalidParameterError,
        UnauthorizedError: ListUserGroupsTeamsUnauthorizedError,
        NotFoundError: ListUserGroupsTeamsNotFoundError,
        InternalServerError: ListUserGroupsTeamsInternalServerError,
        BadGatewayError: ListUserGroupsTeamsBadGatewayError,
        GatewayTimeoutError: ListUserGroupsTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserRolesError: {
        InvalidParameterError: ListUserRolesInvalidParameterError,
        UnauthorizedError: ListUserRolesUnauthorizedError,
        NotFoundError: ListUserRolesNotFoundError,
        InternalServerError: ListUserRolesInternalServerError,
        BadGatewayError: ListUserRolesBadGatewayError,
        GatewayTimeoutError: ListUserRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTeamsError: {
        InvalidParameterError: ListUserTeamsInvalidParameterError,
        UnauthorizedError: ListUserTeamsUnauthorizedError,
        NotFoundError: ListUserTeamsNotFoundError,
        InternalServerError: ListUserTeamsInternalServerError,
        BadGatewayError: ListUserTeamsBadGatewayError,
        GatewayTimeoutError: ListUserTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUsersError: {
        UnauthorizedError: ListUsersUnauthorizedError,
        InternalServerError: ListUsersInternalServerError,
        BadGatewayError: ListUsersBadGatewayError,
        GatewayTimeoutError: ListUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUsersSCIMError: {
        InvalidParameterError: ListUsersSCIMInvalidParameterError,
        UnauthorizedError: ListUsersSCIMUnauthorizedError,
        InternalServerError: ListUsersSCIMInternalServerError,
        BadGatewayError: ListUsersSCIMBadGatewayError,
        GatewayTimeoutError: ListUsersSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    PatchGroupSCIMError: {
        InvalidParameterError: PatchGroupSCIMInvalidParameterError,
        UnauthorizedError: PatchGroupSCIMUnauthorizedError,
        NotFoundError: PatchGroupSCIMNotFoundError,
        InternalServerError: PatchGroupSCIMInternalServerError,
        BadGatewayError: PatchGroupSCIMBadGatewayError,
        GatewayTimeoutError: PatchGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    PatchUserSCIMError: {
        InvalidParameterError: PatchUserSCIMInvalidParameterError,
        UnauthorizedError: PatchUserSCIMUnauthorizedError,
        NotFoundError: PatchUserSCIMNotFoundError,
        InternalServerError: PatchUserSCIMInternalServerError,
        BadGatewayError: PatchUserSCIMBadGatewayError,
        GatewayTimeoutError: PatchUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    RenewTokenError: {
        InvalidParameterError: RenewTokenInvalidParameterError,
        PasswordRevokedError: RenewTokenPasswordRevokedError,
        IdentityDisabledError: RenewTokenIdentityDisabledError,
        NotAllowedError: RenewTokenNotAllowedError,
        InvalidRefreshTokenError: RenewTokenInvalidRefreshTokenError,
        NotFoundError: RenewTokenNotFoundError,
        InternalServerError: RenewTokenInternalServerError,
        BadGatewayError: RenewTokenBadGatewayError,
        GatewayTimeoutError: RenewTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ResetPasswordError: {
        InvalidParameterError: ResetPasswordInvalidParameterError,
        InvalidForgotPasswordError: ResetPasswordInvalidForgotPasswordError,
        InvalidForgotPasswordSecretError: ResetPasswordInvalidForgotPasswordSecretError,
        ExpiredForgotPasswordError: ResetPasswordExpiredForgotPasswordError,
        NotFoundError: ResetPasswordNotFoundError,
        InternalServerError: ResetPasswordInternalServerError,
        BadGatewayError: ResetPasswordBadGatewayError,
        GatewayTimeoutError: ResetPasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    RotateKeyError: {
        UnauthorizedError: RotateKeyUnauthorizedError,
        NotFoundError: RotateKeyNotFoundError,
        InternalServerError: RotateKeyInternalServerError,
        BadGatewayError: RotateKeyBadGatewayError,
        GatewayTimeoutError: RotateKeyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    RotateUserKeyError: {
        InvalidParameterError: RotateUserKeyInvalidParameterError,
        UnauthorizedError: RotateUserKeyUnauthorizedError,
        NotFoundError: RotateUserKeyNotFoundError,
        InternalServerError: RotateUserKeyInternalServerError,
        BadGatewayError: RotateUserKeyBadGatewayError,
        GatewayTimeoutError: RotateUserKeyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    SSOSignInError: {
        InvalidParameterError: SSOSignInInvalidParameterError,
        NotFoundError: SSOSignInNotFoundError,
        ConflictError: SSOSignInConflictError,
        InternalServerError: SSOSignInInternalServerError,
        BadGatewayError: SSOSignInBadGatewayError,
        GatewayTimeoutError: SSOSignInGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    SamlSignOnError: {
        InvalidParameterError: SamlSignOnInvalidParameterError,
        UserNotAllowedToSignOnError: SamlSignOnUserNotAllowedToSignOnError,
        NotFoundError: SamlSignOnNotFoundError,
        ConflictError: SamlSignOnConflictError,
        InternalServerError: SamlSignOnInternalServerError,
        BadGatewayError: SamlSignOnBadGatewayError,
        GatewayTimeoutError: SamlSignOnGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateAccountError: {
        InvalidParameterError: UpdateAccountInvalidParameterError,
        UnauthorizedError: UpdateAccountUnauthorizedError,
        ForbiddenError: UpdateAccountForbiddenError,
        NotFoundError: UpdateAccountNotFoundError,
        ConflictError: UpdateAccountConflictError,
        InternalServerError: UpdateAccountInternalServerError,
        BadGatewayError: UpdateAccountBadGatewayError,
        GatewayTimeoutError: UpdateAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateGroupError: {
        InvalidParameterError: UpdateGroupInvalidParameterError,
        UnauthorizedError: UpdateGroupUnauthorizedError,
        NotFoundError: UpdateGroupNotFoundError,
        InternalServerError: UpdateGroupInternalServerError,
        BadGatewayError: UpdateGroupBadGatewayError,
        GatewayTimeoutError: UpdateGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateGroupSCIMError: {
        InvalidParameterError: UpdateGroupSCIMInvalidParameterError,
        UnauthorizedError: UpdateGroupSCIMUnauthorizedError,
        NotFoundError: UpdateGroupSCIMNotFoundError,
        InternalServerError: UpdateGroupSCIMInternalServerError,
        BadGatewayError: UpdateGroupSCIMBadGatewayError,
        GatewayTimeoutError: UpdateGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateManagedPolicyError: {
        InvalidParameterError: UpdateManagedPolicyInvalidParameterError,
        UnauthorizedError: UpdateManagedPolicyUnauthorizedError,
        NotFoundError: UpdateManagedPolicyNotFoundError,
        InternalServerError: UpdateManagedPolicyInternalServerError,
        BadGatewayError: UpdateManagedPolicyBadGatewayError,
        GatewayTimeoutError: UpdateManagedPolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdatePasswordError: {
        InvalidParameterError: UpdatePasswordInvalidParameterError,
        UnauthorizedError: UpdatePasswordUnauthorizedError,
        InvalidAuthenticationModeError: UpdatePasswordInvalidAuthenticationModeError,
        PasswordDoesNotMatchError: UpdatePasswordPasswordDoesNotMatchError,
        NotFoundError: UpdatePasswordNotFoundError,
        InternalServerError: UpdatePasswordInternalServerError,
        BadGatewayError: UpdatePasswordBadGatewayError,
        GatewayTimeoutError: UpdatePasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdatePolicyError: {
        InvalidParameterError: UpdatePolicyInvalidParameterError,
        UnauthorizedError: UpdatePolicyUnauthorizedError,
        NotFoundError: UpdatePolicyNotFoundError,
        InternalServerError: UpdatePolicyInternalServerError,
        BadGatewayError: UpdatePolicyBadGatewayError,
        GatewayTimeoutError: UpdatePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AcceptInvitationError: {
        InvalidParameterError: AcceptInvitationInvalidParameterError,
        InvalidInvitationError: AcceptInvitationInvalidInvitationError,
        InvalidInvitationSecretError: AcceptInvitationInvalidInvitationSecretError,
        ExpiredInvitationError: AcceptInvitationExpiredInvitationError,
        NotFoundError: AcceptInvitationNotFoundError,
        InternalServerError: AcceptInvitationInternalServerError,
        BadGatewayError: AcceptInvitationBadGatewayError,
        GatewayTimeoutError: AcceptInvitationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AcceptUserInvitationError: {
        InvalidParameterError: AcceptUserInvitationInvalidParameterError,
        InvalidInvitationError: AcceptUserInvitationInvalidInvitationError,
        ExpiredInvitationError: AcceptUserInvitationExpiredInvitationError,
        NotFoundError: AcceptUserInvitationNotFoundError,
        InternalServerError: AcceptUserInvitationInternalServerError,
        BadGatewayError: AcceptUserInvitationBadGatewayError,
        GatewayTimeoutError: AcceptUserInvitationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachGroupRoleError: {
        InvalidParameterError: AttachGroupRoleInvalidParameterError,
        UnauthorizedError: AttachGroupRoleUnauthorizedError,
        NotFoundError: AttachGroupRoleNotFoundError,
        ConflictError: AttachGroupRoleConflictError,
        InternalServerError: AttachGroupRoleInternalServerError,
        BadGatewayError: AttachGroupRoleBadGatewayError,
        GatewayTimeoutError: AttachGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachGroupUserError: {
        InvalidParameterError: AttachGroupUserInvalidParameterError,
        UnauthorizedError: AttachGroupUserUnauthorizedError,
        NotFoundError: AttachGroupUserNotFoundError,
        ConflictError: AttachGroupUserConflictError,
        InternalServerError: AttachGroupUserInternalServerError,
        BadGatewayError: AttachGroupUserBadGatewayError,
        GatewayTimeoutError: AttachGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachRolePolicyError: {
        InvalidParameterError: AttachRolePolicyInvalidParameterError,
        UnauthorizedError: AttachRolePolicyUnauthorizedError,
        NotFoundError: AttachRolePolicyNotFoundError,
        ConflictError: AttachRolePolicyConflictError,
        InternalServerError: AttachRolePolicyInternalServerError,
        BadGatewayError: AttachRolePolicyBadGatewayError,
        GatewayTimeoutError: AttachRolePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamGroupError: {
        InvalidParameterError: AttachTeamGroupInvalidParameterError,
        UnauthorizedError: AttachTeamGroupUnauthorizedError,
        NotFoundError: AttachTeamGroupNotFoundError,
        ConflictError: AttachTeamGroupConflictError,
        InternalServerError: AttachTeamGroupInternalServerError,
        BadGatewayError: AttachTeamGroupBadGatewayError,
        GatewayTimeoutError: AttachTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamGroupRoleError: {
        InvalidParameterError: AttachTeamGroupRoleInvalidParameterError,
        UnauthorizedError: AttachTeamGroupRoleUnauthorizedError,
        NotFoundError: AttachTeamGroupRoleNotFoundError,
        ConflictError: AttachTeamGroupRoleConflictError,
        InternalServerError: AttachTeamGroupRoleInternalServerError,
        BadGatewayError: AttachTeamGroupRoleBadGatewayError,
        GatewayTimeoutError: AttachTeamGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamGroupUserError: {
        InvalidParameterError: AttachTeamGroupUserInvalidParameterError,
        UnauthorizedError: AttachTeamGroupUserUnauthorizedError,
        NotFoundError: AttachTeamGroupUserNotFoundError,
        ConflictError: AttachTeamGroupUserConflictError,
        InternalServerError: AttachTeamGroupUserInternalServerError,
        BadGatewayError: AttachTeamGroupUserBadGatewayError,
        GatewayTimeoutError: AttachTeamGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamRoleError: {
        InvalidParameterError: AttachTeamRoleInvalidParameterError,
        UnauthorizedError: AttachTeamRoleUnauthorizedError,
        NotFoundError: AttachTeamRoleNotFoundError,
        ConflictError: AttachTeamRoleConflictError,
        InternalServerError: AttachTeamRoleInternalServerError,
        BadGatewayError: AttachTeamRoleBadGatewayError,
        GatewayTimeoutError: AttachTeamRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamUserError: {
        InvalidParameterError: AttachTeamUserInvalidParameterError,
        UnauthorizedError: AttachTeamUserUnauthorizedError,
        NotFoundError: AttachTeamUserNotFoundError,
        ConflictError: AttachTeamUserConflictError,
        InternalServerError: AttachTeamUserInternalServerError,
        BadGatewayError: AttachTeamUserBadGatewayError,
        GatewayTimeoutError: AttachTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamUserRoleError: {
        InvalidParameterError: AttachTeamUserRoleInvalidParameterError,
        UnauthorizedError: AttachTeamUserRoleUnauthorizedError,
        NotFoundError: AttachTeamUserRoleNotFoundError,
        ConflictError: AttachTeamUserRoleConflictError,
        InternalServerError: AttachTeamUserRoleInternalServerError,
        BadGatewayError: AttachTeamUserRoleBadGatewayError,
        GatewayTimeoutError: AttachTeamUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachUserRoleError: {
        InvalidParameterError: AttachUserRoleInvalidParameterError,
        UnauthorizedError: AttachUserRoleUnauthorizedError,
        NotFoundError: AttachUserRoleNotFoundError,
        ConflictError: AttachUserRoleConflictError,
        InternalServerError: AttachUserRoleInternalServerError,
        BadGatewayError: AttachUserRoleBadGatewayError,
        GatewayTimeoutError: AttachUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ChangePasswordError: {
        InvalidParameterError: ChangePasswordInvalidParameterError,
        InvalidForgotPasswordError: ChangePasswordInvalidForgotPasswordError,
        ExpiredPasswordSecretError: ChangePasswordExpiredPasswordSecretError,
        InvalidForgotPasswordSecretError: ChangePasswordInvalidForgotPasswordSecretError,
        NotFoundError: ChangePasswordNotFoundError,
        InternalServerError: ChangePasswordInternalServerError,
        BadGatewayError: ChangePasswordBadGatewayError,
        GatewayTimeoutError: ChangePasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateAccountError: {
        InvalidParameterError: CreateAccountInvalidParameterError,
        NotFoundError: CreateAccountNotFoundError,
        ConflictError: CreateAccountConflictError,
        InternalServerError: CreateAccountInternalServerError,
        BadGatewayError: CreateAccountBadGatewayError,
        GatewayTimeoutError: CreateAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateGroupError: {
        InvalidParameterError: CreateGroupInvalidParameterError,
        UnauthorizedError: CreateGroupUnauthorizedError,
        ConflictError: CreateGroupConflictError,
        InternalServerError: CreateGroupInternalServerError,
        BadGatewayError: CreateGroupBadGatewayError,
        GatewayTimeoutError: CreateGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateGroupSCIMError: {
        InvalidParameterError: CreateGroupSCIMInvalidParameterError,
        UnauthorizedError: CreateGroupSCIMUnauthorizedError,
        NotFoundError: CreateGroupSCIMNotFoundError,
        ConflictError: CreateGroupSCIMConflictError,
        InternalServerError: CreateGroupSCIMInternalServerError,
        BadGatewayError: CreateGroupSCIMBadGatewayError,
        GatewayTimeoutError: CreateGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreatePolicyError: {
        InvalidParameterError: CreatePolicyInvalidParameterError,
        UnauthorizedError: CreatePolicyUnauthorizedError,
        ConflictError: CreatePolicyConflictError,
        InternalServerError: CreatePolicyInternalServerError,
        BadGatewayError: CreatePolicyBadGatewayError,
        GatewayTimeoutError: CreatePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateProviderError: {
        InvalidParameterError: CreateProviderInvalidParameterError,
        UnauthorizedError: CreateProviderUnauthorizedError,
        InvalidCertificateError: CreateProviderInvalidCertificateError,
        ConflictError: CreateProviderConflictError,
        InternalServerError: CreateProviderInternalServerError,
        BadGatewayError: CreateProviderBadGatewayError,
        GatewayTimeoutError: CreateProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateRoleError: {
        InvalidParameterError: CreateRoleInvalidParameterError,
        UnauthorizedError: CreateRoleUnauthorizedError,
        ConflictError: CreateRoleConflictError,
        InternalServerError: CreateRoleInternalServerError,
        BadGatewayError: CreateRoleBadGatewayError,
        GatewayTimeoutError: CreateRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTeamError: {
        InvalidParameterError: CreateTeamInvalidParameterError,
        UnauthorizedError: CreateTeamUnauthorizedError,
        ConflictError: CreateTeamConflictError,
        InternalServerError: CreateTeamInternalServerError,
        BadGatewayError: CreateTeamBadGatewayError,
        GatewayTimeoutError: CreateTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTokenError: {
        InvalidParameterError: CreateTokenInvalidParameterError,
        InvalidCredentialsError: CreateTokenInvalidCredentialsError,
        PasswordRevokedError: CreateTokenPasswordRevokedError,
        IdentityDisabledError: CreateTokenIdentityDisabledError,
        InvalidAuthenticationModeError: CreateTokenInvalidAuthenticationModeError,
        NotFoundError: CreateTokenNotFoundError,
        ConflictError: CreateTokenConflictError,
        InternalServerError: CreateTokenInternalServerError,
        BadGatewayError: CreateTokenBadGatewayError,
        GatewayTimeoutError: CreateTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateUserError: {
        InvalidParameterError: CreateUserInvalidParameterError,
        UnauthorizedError: CreateUserUnauthorizedError,
        InvalidSubscriptionError: CreateUserInvalidSubscriptionError,
        ConflictError: CreateUserConflictError,
        InternalServerError: CreateUserInternalServerError,
        BadGatewayError: CreateUserBadGatewayError,
        GatewayTimeoutError: CreateUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateUserSCIMError: {
        InvalidParameterError: CreateUserSCIMInvalidParameterError,
        UnauthorizedError: CreateUserSCIMUnauthorizedError,
        NotFoundError: CreateUserSCIMNotFoundError,
        ConflictError: CreateUserSCIMConflictError,
        InternalServerError: CreateUserSCIMInternalServerError,
        BadGatewayError: CreateUserSCIMBadGatewayError,
        GatewayTimeoutError: CreateUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateUserTokenError: {
        InvalidParameterError: CreateUserTokenInvalidParameterError,
        UnauthorizedError: CreateUserTokenUnauthorizedError,
        IdentityDisabledError: CreateUserTokenIdentityDisabledError,
        NotFoundError: CreateUserTokenNotFoundError,
        ConflictError: CreateUserTokenConflictError,
        InternalServerError: CreateUserTokenInternalServerError,
        BadGatewayError: CreateUserTokenBadGatewayError,
        GatewayTimeoutError: CreateUserTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteAccountError: {
        UnauthorizedError: DeleteAccountUnauthorizedError,
        NotFoundError: DeleteAccountNotFoundError,
        InternalServerError: DeleteAccountInternalServerError,
        BadGatewayError: DeleteAccountBadGatewayError,
        GatewayTimeoutError: DeleteAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteGroupError: {
        InvalidParameterError: DeleteGroupInvalidParameterError,
        UnauthorizedError: DeleteGroupUnauthorizedError,
        ForbiddenError: DeleteGroupForbiddenError,
        NotFoundError: DeleteGroupNotFoundError,
        InternalServerError: DeleteGroupInternalServerError,
        BadGatewayError: DeleteGroupBadGatewayError,
        GatewayTimeoutError: DeleteGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteGroupSCIMError: {
        InvalidParameterError: DeleteGroupSCIMInvalidParameterError,
        UnauthorizedError: DeleteGroupSCIMUnauthorizedError,
        NotFoundError: DeleteGroupSCIMNotFoundError,
        InternalServerError: DeleteGroupSCIMInternalServerError,
        BadGatewayError: DeleteGroupSCIMBadGatewayError,
        GatewayTimeoutError: DeleteGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeletePolicyError: {
        InvalidParameterError: DeletePolicyInvalidParameterError,
        UnauthorizedError: DeletePolicyUnauthorizedError,
        ForbiddenError: DeletePolicyForbiddenError,
        NotFoundError: DeletePolicyNotFoundError,
        InternalServerError: DeletePolicyInternalServerError,
        BadGatewayError: DeletePolicyBadGatewayError,
        GatewayTimeoutError: DeletePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteProviderError: {
        InvalidParameterError: DeleteProviderInvalidParameterError,
        UnauthorizedError: DeleteProviderUnauthorizedError,
        NotFoundError: DeleteProviderNotFoundError,
        InternalServerError: DeleteProviderInternalServerError,
        BadGatewayError: DeleteProviderBadGatewayError,
        GatewayTimeoutError: DeleteProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteRoleError: {
        InvalidParameterError: DeleteRoleInvalidParameterError,
        UnauthorizedError: DeleteRoleUnauthorizedError,
        ForbiddenError: DeleteRoleForbiddenError,
        NotFoundError: DeleteRoleNotFoundError,
        InternalServerError: DeleteRoleInternalServerError,
        BadGatewayError: DeleteRoleBadGatewayError,
        GatewayTimeoutError: DeleteRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTeamError: {
        InvalidParameterError: DeleteTeamInvalidParameterError,
        UnauthorizedError: DeleteTeamUnauthorizedError,
        ForbiddenError: DeleteTeamForbiddenError,
        NotFoundError: DeleteTeamNotFoundError,
        InternalServerError: DeleteTeamInternalServerError,
        BadGatewayError: DeleteTeamBadGatewayError,
        GatewayTimeoutError: DeleteTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteUserError: {
        InvalidParameterError: DeleteUserInvalidParameterError,
        UnauthorizedError: DeleteUserUnauthorizedError,
        ForbiddenError: DeleteUserForbiddenError,
        NotFoundError: DeleteUserNotFoundError,
        InternalServerError: DeleteUserInternalServerError,
        BadGatewayError: DeleteUserBadGatewayError,
        GatewayTimeoutError: DeleteUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteUserSCIMError: {
        InvalidParameterError: DeleteUserSCIMInvalidParameterError,
        UnauthorizedError: DeleteUserSCIMUnauthorizedError,
        NotFoundError: DeleteUserSCIMNotFoundError,
        InternalServerError: DeleteUserSCIMInternalServerError,
        BadGatewayError: DeleteUserSCIMBadGatewayError,
        GatewayTimeoutError: DeleteUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachGroupRoleError: {
        InvalidParameterError: DetachGroupRoleInvalidParameterError,
        UnauthorizedError: DetachGroupRoleUnauthorizedError,
        NotFoundError: DetachGroupRoleNotFoundError,
        InternalServerError: DetachGroupRoleInternalServerError,
        BadGatewayError: DetachGroupRoleBadGatewayError,
        GatewayTimeoutError: DetachGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachGroupUserError: {
        InvalidParameterError: DetachGroupUserInvalidParameterError,
        UnauthorizedError: DetachGroupUserUnauthorizedError,
        NotFoundError: DetachGroupUserNotFoundError,
        InternalServerError: DetachGroupUserInternalServerError,
        BadGatewayError: DetachGroupUserBadGatewayError,
        GatewayTimeoutError: DetachGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachRolePolicyError: {
        InvalidParameterError: DetachRolePolicyInvalidParameterError,
        UnauthorizedError: DetachRolePolicyUnauthorizedError,
        NotFoundError: DetachRolePolicyNotFoundError,
        InternalServerError: DetachRolePolicyInternalServerError,
        BadGatewayError: DetachRolePolicyBadGatewayError,
        GatewayTimeoutError: DetachRolePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamGroupError: {
        InvalidParameterError: DetachTeamGroupInvalidParameterError,
        UnauthorizedError: DetachTeamGroupUnauthorizedError,
        NotFoundError: DetachTeamGroupNotFoundError,
        InternalServerError: DetachTeamGroupInternalServerError,
        BadGatewayError: DetachTeamGroupBadGatewayError,
        GatewayTimeoutError: DetachTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamGroupRoleError: {
        InvalidParameterError: DetachTeamGroupRoleInvalidParameterError,
        UnauthorizedError: DetachTeamGroupRoleUnauthorizedError,
        NotFoundError: DetachTeamGroupRoleNotFoundError,
        InternalServerError: DetachTeamGroupRoleInternalServerError,
        BadGatewayError: DetachTeamGroupRoleBadGatewayError,
        GatewayTimeoutError: DetachTeamGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamGroupUserError: {
        InvalidParameterError: DetachTeamGroupUserInvalidParameterError,
        UnauthorizedError: DetachTeamGroupUserUnauthorizedError,
        NotFoundError: DetachTeamGroupUserNotFoundError,
        InternalServerError: DetachTeamGroupUserInternalServerError,
        BadGatewayError: DetachTeamGroupUserBadGatewayError,
        GatewayTimeoutError: DetachTeamGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamRoleError: {
        InvalidParameterError: DetachTeamRoleInvalidParameterError,
        UnauthorizedError: DetachTeamRoleUnauthorizedError,
        NotFoundError: DetachTeamRoleNotFoundError,
        InternalServerError: DetachTeamRoleInternalServerError,
        BadGatewayError: DetachTeamRoleBadGatewayError,
        GatewayTimeoutError: DetachTeamRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamUserError: {
        InvalidParameterError: DetachTeamUserInvalidParameterError,
        UnauthorizedError: DetachTeamUserUnauthorizedError,
        NotFoundError: DetachTeamUserNotFoundError,
        InternalServerError: DetachTeamUserInternalServerError,
        BadGatewayError: DetachTeamUserBadGatewayError,
        GatewayTimeoutError: DetachTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamUserRoleError: {
        InvalidParameterError: DetachTeamUserRoleInvalidParameterError,
        UnauthorizedError: DetachTeamUserRoleUnauthorizedError,
        NotFoundError: DetachTeamUserRoleNotFoundError,
        InternalServerError: DetachTeamUserRoleInternalServerError,
        BadGatewayError: DetachTeamUserRoleBadGatewayError,
        GatewayTimeoutError: DetachTeamUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachUserRoleError: {
        InvalidParameterError: DetachUserRoleInvalidParameterError,
        UnauthorizedError: DetachUserRoleUnauthorizedError,
        NotFoundError: DetachUserRoleNotFoundError,
        InternalServerError: DetachUserRoleInternalServerError,
        BadGatewayError: DetachUserRoleBadGatewayError,
        GatewayTimeoutError: DetachUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ForgotPasswordError: {
        InvalidParameterError: ForgotPasswordInvalidParameterError,
        InvalidIdentityUsernameError: ForgotPasswordInvalidIdentityUsernameError,
        NotFoundError: ForgotPasswordNotFoundError,
        InternalServerError: ForgotPasswordInternalServerError,
        BadGatewayError: ForgotPasswordBadGatewayError,
        GatewayTimeoutError: ForgotPasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetAccountError: {
        UnauthorizedError: GetAccountUnauthorizedError,
        NotFoundError: GetAccountNotFoundError,
        InternalServerError: GetAccountInternalServerError,
        BadGatewayError: GetAccountBadGatewayError,
        GatewayTimeoutError: GetAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetGroupError: {
        InvalidParameterError: GetGroupInvalidParameterError,
        UnauthorizedError: GetGroupUnauthorizedError,
        NotFoundError: GetGroupNotFoundError,
        InternalServerError: GetGroupInternalServerError,
        BadGatewayError: GetGroupBadGatewayError,
        GatewayTimeoutError: GetGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetGroupSCIMError: {
        InvalidParameterError: GetGroupSCIMInvalidParameterError,
        UnauthorizedError: GetGroupSCIMUnauthorizedError,
        NotFoundError: GetGroupSCIMNotFoundError,
        InternalServerError: GetGroupSCIMInternalServerError,
        BadGatewayError: GetGroupSCIMBadGatewayError,
        GatewayTimeoutError: GetGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DecodeTokenError: {
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
