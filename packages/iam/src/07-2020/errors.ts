import { UnknownError, NetworkError } from "@smash-sdk/core";
import { BadRequestError as UpdateTeamBadRequestError } from "./types/UpdateTeam/UpdateTeamError";
import { UnauthorizedError as UpdateTeamUnauthorizedError } from "./types/UpdateTeam/UpdateTeamError";
import { NotFoundError as UpdateTeamNotFoundError } from "./types/UpdateTeam/UpdateTeamError";
import { InternalServerError as UpdateTeamInternalServerError } from "./types/UpdateTeam/UpdateTeamError";
import { BadGatewayError as UpdateTeamBadGatewayError } from "./types/UpdateTeam/UpdateTeamError";
import { GatewayTimeoutError as UpdateTeamGatewayTimeoutError } from "./types/UpdateTeam/UpdateTeamError";
import { BadRequestError as UpdateTeamGroupBadRequestError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { UnauthorizedError as UpdateTeamGroupUnauthorizedError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { NotFoundError as UpdateTeamGroupNotFoundError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { InternalServerError as UpdateTeamGroupInternalServerError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { BadGatewayError as UpdateTeamGroupBadGatewayError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { GatewayTimeoutError as UpdateTeamGroupGatewayTimeoutError } from "./types/UpdateTeamGroup/UpdateTeamGroupError";
import { BadRequestError as UpdateTeamUserBadRequestError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { UnauthorizedError as UpdateTeamUserUnauthorizedError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { WrongAuthError as UpdateTeamUserWrongAuthError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { NotFoundError as UpdateTeamUserNotFoundError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { InternalServerError as UpdateTeamUserInternalServerError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { BadGatewayError as UpdateTeamUserBadGatewayError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { GatewayTimeoutError as UpdateTeamUserGatewayTimeoutError } from "./types/UpdateTeamUser/UpdateTeamUserError";
import { BadRequestError as UpdateUserBadRequestError } from "./types/UpdateUser/UpdateUserError";
import { UnauthorizedError as UpdateUserUnauthorizedError } from "./types/UpdateUser/UpdateUserError";
import { WrongAuthError as UpdateUserWrongAuthError } from "./types/UpdateUser/UpdateUserError";
import { NotFoundError as UpdateUserNotFoundError } from "./types/UpdateUser/UpdateUserError";
import { InternalServerError as UpdateUserInternalServerError } from "./types/UpdateUser/UpdateUserError";
import { BadGatewayError as UpdateUserBadGatewayError } from "./types/UpdateUser/UpdateUserError";
import { GatewayTimeoutError as UpdateUserGatewayTimeoutError } from "./types/UpdateUser/UpdateUserError";
import { BadRequestError as UpdateUserSCIMBadRequestError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { UnauthorizedError as UpdateUserSCIMUnauthorizedError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { NotFoundError as UpdateUserSCIMNotFoundError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { InternalServerError as UpdateUserSCIMInternalServerError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { BadGatewayError as UpdateUserSCIMBadGatewayError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { GatewayTimeoutError as UpdateUserSCIMGatewayTimeoutError } from "./types/UpdateUserSCIM/UpdateUserSCIMError";
import { BadRequestError as GetPolicyBadRequestError } from "./types/GetPolicy/GetPolicyError";
import { UnauthorizedError as GetPolicyUnauthorizedError } from "./types/GetPolicy/GetPolicyError";
import { NotFoundError as GetPolicyNotFoundError } from "./types/GetPolicy/GetPolicyError";
import { InternalServerError as GetPolicyInternalServerError } from "./types/GetPolicy/GetPolicyError";
import { BadGatewayError as GetPolicyBadGatewayError } from "./types/GetPolicy/GetPolicyError";
import { GatewayTimeoutError as GetPolicyGatewayTimeoutError } from "./types/GetPolicy/GetPolicyError";
import { BadRequestError as GetProviderBadRequestError } from "./types/GetProvider/GetProviderError";
import { UnauthorizedError as GetProviderUnauthorizedError } from "./types/GetProvider/GetProviderError";
import { NotFoundError as GetProviderNotFoundError } from "./types/GetProvider/GetProviderError";
import { InternalServerError as GetProviderInternalServerError } from "./types/GetProvider/GetProviderError";
import { BadGatewayError as GetProviderBadGatewayError } from "./types/GetProvider/GetProviderError";
import { GatewayTimeoutError as GetProviderGatewayTimeoutError } from "./types/GetProvider/GetProviderError";
import { BadRequestError as GetResourceTypesBadRequestError } from "./types/GetResourceTypes/GetResourceTypesError";
import { UnauthorizedError as GetResourceTypesUnauthorizedError } from "./types/GetResourceTypes/GetResourceTypesError";
import { InternalServerError as GetResourceTypesInternalServerError } from "./types/GetResourceTypes/GetResourceTypesError";
import { BadGatewayError as GetResourceTypesBadGatewayError } from "./types/GetResourceTypes/GetResourceTypesError";
import { GatewayTimeoutError as GetResourceTypesGatewayTimeoutError } from "./types/GetResourceTypes/GetResourceTypesError";
import { BadRequestError as GetRoleBadRequestError } from "./types/GetRole/GetRoleError";
import { UnauthorizedError as GetRoleUnauthorizedError } from "./types/GetRole/GetRoleError";
import { NotFoundError as GetRoleNotFoundError } from "./types/GetRole/GetRoleError";
import { InternalServerError as GetRoleInternalServerError } from "./types/GetRole/GetRoleError";
import { BadGatewayError as GetRoleBadGatewayError } from "./types/GetRole/GetRoleError";
import { GatewayTimeoutError as GetRoleGatewayTimeoutError } from "./types/GetRole/GetRoleError";
import { BadRequestError as GetSchemasBadRequestError } from "./types/GetSchemas/GetSchemasError";
import { UnauthorizedError as GetSchemasUnauthorizedError } from "./types/GetSchemas/GetSchemasError";
import { InternalServerError as GetSchemasInternalServerError } from "./types/GetSchemas/GetSchemasError";
import { BadGatewayError as GetSchemasBadGatewayError } from "./types/GetSchemas/GetSchemasError";
import { GatewayTimeoutError as GetSchemasGatewayTimeoutError } from "./types/GetSchemas/GetSchemasError";
import { BadRequestError as GetServiceProviderConfigBadRequestError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { UnauthorizedError as GetServiceProviderConfigUnauthorizedError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { InternalServerError as GetServiceProviderConfigInternalServerError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { BadGatewayError as GetServiceProviderConfigBadGatewayError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { GatewayTimeoutError as GetServiceProviderConfigGatewayTimeoutError } from "./types/GetServiceProviderConfig/GetServiceProviderConfigError";
import { BadRequestError as GetSigninConfigurationBadRequestError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { NotFoundError as GetSigninConfigurationNotFoundError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { InternalServerError as GetSigninConfigurationInternalServerError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { BadGatewayError as GetSigninConfigurationBadGatewayError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { GatewayTimeoutError as GetSigninConfigurationGatewayTimeoutError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { BadRequestError as GetTeamBadRequestError } from "./types/GetTeam/GetTeamError";
import { UnauthorizedError as GetTeamUnauthorizedError } from "./types/GetTeam/GetTeamError";
import { NotFoundError as GetTeamNotFoundError } from "./types/GetTeam/GetTeamError";
import { InternalServerError as GetTeamInternalServerError } from "./types/GetTeam/GetTeamError";
import { BadGatewayError as GetTeamBadGatewayError } from "./types/GetTeam/GetTeamError";
import { GatewayTimeoutError as GetTeamGatewayTimeoutError } from "./types/GetTeam/GetTeamError";
import { BadRequestError as GetTeamGroupBadRequestError } from "./types/GetTeamGroup/GetTeamGroupError";
import { UnauthorizedError as GetTeamGroupUnauthorizedError } from "./types/GetTeamGroup/GetTeamGroupError";
import { NotFoundError as GetTeamGroupNotFoundError } from "./types/GetTeamGroup/GetTeamGroupError";
import { InternalServerError as GetTeamGroupInternalServerError } from "./types/GetTeamGroup/GetTeamGroupError";
import { BadGatewayError as GetTeamGroupBadGatewayError } from "./types/GetTeamGroup/GetTeamGroupError";
import { GatewayTimeoutError as GetTeamGroupGatewayTimeoutError } from "./types/GetTeamGroup/GetTeamGroupError";
import { BadRequestError as GetTeamUserBadRequestError } from "./types/GetTeamUser/GetTeamUserError";
import { UnauthorizedError as GetTeamUserUnauthorizedError } from "./types/GetTeamUser/GetTeamUserError";
import { NotFoundError as GetTeamUserNotFoundError } from "./types/GetTeamUser/GetTeamUserError";
import { InternalServerError as GetTeamUserInternalServerError } from "./types/GetTeamUser/GetTeamUserError";
import { BadGatewayError as GetTeamUserBadGatewayError } from "./types/GetTeamUser/GetTeamUserError";
import { GatewayTimeoutError as GetTeamUserGatewayTimeoutError } from "./types/GetTeamUser/GetTeamUserError";
import { BadRequestError as GetUserBadRequestError } from "./types/GetUser/GetUserError";
import { UnauthorizedError as GetUserUnauthorizedError } from "./types/GetUser/GetUserError";
import { NotFoundError as GetUserNotFoundError } from "./types/GetUser/GetUserError";
import { InternalServerError as GetUserInternalServerError } from "./types/GetUser/GetUserError";
import { BadGatewayError as GetUserBadGatewayError } from "./types/GetUser/GetUserError";
import { GatewayTimeoutError as GetUserGatewayTimeoutError } from "./types/GetUser/GetUserError";
import { BadRequestError as GetUserSCIMBadRequestError } from "./types/GetUserSCIM/GetUserSCIMError";
import { UnauthorizedError as GetUserSCIMUnauthorizedError } from "./types/GetUserSCIM/GetUserSCIMError";
import { NotFoundError as GetUserSCIMNotFoundError } from "./types/GetUserSCIM/GetUserSCIMError";
import { InternalServerError as GetUserSCIMInternalServerError } from "./types/GetUserSCIM/GetUserSCIMError";
import { BadGatewayError as GetUserSCIMBadGatewayError } from "./types/GetUserSCIM/GetUserSCIMError";
import { GatewayTimeoutError as GetUserSCIMGatewayTimeoutError } from "./types/GetUserSCIM/GetUserSCIMError";
import { BadRequestError as InviteTeamUserBadRequestError } from "./types/InviteTeamUser/InviteTeamUserError";
import { UnauthorizedError as InviteTeamUserUnauthorizedError } from "./types/InviteTeamUser/InviteTeamUserError";
import { NotFoundError as InviteTeamUserNotFoundError } from "./types/InviteTeamUser/InviteTeamUserError";
import { InternalServerError as InviteTeamUserInternalServerError } from "./types/InviteTeamUser/InviteTeamUserError";
import { BadGatewayError as InviteTeamUserBadGatewayError } from "./types/InviteTeamUser/InviteTeamUserError";
import { GatewayTimeoutError as InviteTeamUserGatewayTimeoutError } from "./types/InviteTeamUser/InviteTeamUserError";
import { BadRequestError as InviteUserBadRequestError } from "./types/InviteUser/InviteUserError";
import { UnauthorizedError as InviteUserUnauthorizedError } from "./types/InviteUser/InviteUserError";
import { NotFoundError as InviteUserNotFoundError } from "./types/InviteUser/InviteUserError";
import { InternalServerError as InviteUserInternalServerError } from "./types/InviteUser/InviteUserError";
import { BadGatewayError as InviteUserBadGatewayError } from "./types/InviteUser/InviteUserError";
import { GatewayTimeoutError as InviteUserGatewayTimeoutError } from "./types/InviteUser/InviteUserError";
import { BadRequestError as ListGroupRolesBadRequestError } from "./types/ListGroupRoles/ListGroupRolesError";
import { UnauthorizedError as ListGroupRolesUnauthorizedError } from "./types/ListGroupRoles/ListGroupRolesError";
import { NotFoundError as ListGroupRolesNotFoundError } from "./types/ListGroupRoles/ListGroupRolesError";
import { InternalServerError as ListGroupRolesInternalServerError } from "./types/ListGroupRoles/ListGroupRolesError";
import { BadGatewayError as ListGroupRolesBadGatewayError } from "./types/ListGroupRoles/ListGroupRolesError";
import { GatewayTimeoutError as ListGroupRolesGatewayTimeoutError } from "./types/ListGroupRoles/ListGroupRolesError";
import { BadRequestError as ListGroupTeamsBadRequestError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { UnauthorizedError as ListGroupTeamsUnauthorizedError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { NotFoundError as ListGroupTeamsNotFoundError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { InternalServerError as ListGroupTeamsInternalServerError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { BadGatewayError as ListGroupTeamsBadGatewayError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { GatewayTimeoutError as ListGroupTeamsGatewayTimeoutError } from "./types/ListGroupTeams/ListGroupTeamsError";
import { BadRequestError as ListGroupUsersBadRequestError } from "./types/ListGroupUsers/ListGroupUsersError";
import { UnauthorizedError as ListGroupUsersUnauthorizedError } from "./types/ListGroupUsers/ListGroupUsersError";
import { NotFoundError as ListGroupUsersNotFoundError } from "./types/ListGroupUsers/ListGroupUsersError";
import { InternalServerError as ListGroupUsersInternalServerError } from "./types/ListGroupUsers/ListGroupUsersError";
import { BadGatewayError as ListGroupUsersBadGatewayError } from "./types/ListGroupUsers/ListGroupUsersError";
import { GatewayTimeoutError as ListGroupUsersGatewayTimeoutError } from "./types/ListGroupUsers/ListGroupUsersError";
import { BadRequestError as ListGroupsBadRequestError } from "./types/ListGroups/ListGroupsError";
import { UnauthorizedError as ListGroupsUnauthorizedError } from "./types/ListGroups/ListGroupsError";
import { NotFoundError as ListGroupsNotFoundError } from "./types/ListGroups/ListGroupsError";
import { InternalServerError as ListGroupsInternalServerError } from "./types/ListGroups/ListGroupsError";
import { BadGatewayError as ListGroupsBadGatewayError } from "./types/ListGroups/ListGroupsError";
import { GatewayTimeoutError as ListGroupsGatewayTimeoutError } from "./types/ListGroups/ListGroupsError";
import { BadRequestError as ListGroupsSCIMBadRequestError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { UnauthorizedError as ListGroupsSCIMUnauthorizedError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { InternalServerError as ListGroupsSCIMInternalServerError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { BadGatewayError as ListGroupsSCIMBadGatewayError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { GatewayTimeoutError as ListGroupsSCIMGatewayTimeoutError } from "./types/ListGroupsSCIM/ListGroupsSCIMError";
import { BadRequestError as ListPoliciesBadRequestError } from "./types/ListPolicies/ListPoliciesError";
import { UnauthorizedError as ListPoliciesUnauthorizedError } from "./types/ListPolicies/ListPoliciesError";
import { InternalServerError as ListPoliciesInternalServerError } from "./types/ListPolicies/ListPoliciesError";
import { BadGatewayError as ListPoliciesBadGatewayError } from "./types/ListPolicies/ListPoliciesError";
import { GatewayTimeoutError as ListPoliciesGatewayTimeoutError } from "./types/ListPolicies/ListPoliciesError";
import { BadRequestError as ListProvidersBadRequestError } from "./types/ListProviders/ListProvidersError";
import { UnauthorizedError as ListProvidersUnauthorizedError } from "./types/ListProviders/ListProvidersError";
import { InternalServerError as ListProvidersInternalServerError } from "./types/ListProviders/ListProvidersError";
import { BadGatewayError as ListProvidersBadGatewayError } from "./types/ListProviders/ListProvidersError";
import { GatewayTimeoutError as ListProvidersGatewayTimeoutError } from "./types/ListProviders/ListProvidersError";
import { BadRequestError as ListRolesBadRequestError } from "./types/ListRoles/ListRolesError";
import { UnauthorizedError as ListRolesUnauthorizedError } from "./types/ListRoles/ListRolesError";
import { InternalServerError as ListRolesInternalServerError } from "./types/ListRoles/ListRolesError";
import { BadGatewayError as ListRolesBadGatewayError } from "./types/ListRoles/ListRolesError";
import { GatewayTimeoutError as ListRolesGatewayTimeoutError } from "./types/ListRoles/ListRolesError";
import { BadRequestError as ListTeamGroupRolesBadRequestError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { UnauthorizedError as ListTeamGroupRolesUnauthorizedError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { NotFoundError as ListTeamGroupRolesNotFoundError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { InternalServerError as ListTeamGroupRolesInternalServerError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { BadGatewayError as ListTeamGroupRolesBadGatewayError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { GatewayTimeoutError as ListTeamGroupRolesGatewayTimeoutError } from "./types/ListTeamGroupRoles/ListTeamGroupRolesError";
import { BadRequestError as ListTeamGroupUsersBadRequestError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { UnauthorizedError as ListTeamGroupUsersUnauthorizedError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { NotFoundError as ListTeamGroupUsersNotFoundError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { InternalServerError as ListTeamGroupUsersInternalServerError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { BadGatewayError as ListTeamGroupUsersBadGatewayError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { GatewayTimeoutError as ListTeamGroupUsersGatewayTimeoutError } from "./types/ListTeamGroupUsers/ListTeamGroupUsersError";
import { BadRequestError as ListTeamGroupsBadRequestError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { UnauthorizedError as ListTeamGroupsUnauthorizedError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { NotFoundError as ListTeamGroupsNotFoundError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { InternalServerError as ListTeamGroupsInternalServerError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { BadGatewayError as ListTeamGroupsBadGatewayError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { GatewayTimeoutError as ListTeamGroupsGatewayTimeoutError } from "./types/ListTeamGroups/ListTeamGroupsError";
import { BadRequestError as ListTeamRolesBadRequestError } from "./types/ListTeamRoles/ListTeamRolesError";
import { UnauthorizedError as ListTeamRolesUnauthorizedError } from "./types/ListTeamRoles/ListTeamRolesError";
import { NotFoundError as ListTeamRolesNotFoundError } from "./types/ListTeamRoles/ListTeamRolesError";
import { InternalServerError as ListTeamRolesInternalServerError } from "./types/ListTeamRoles/ListTeamRolesError";
import { BadGatewayError as ListTeamRolesBadGatewayError } from "./types/ListTeamRoles/ListTeamRolesError";
import { GatewayTimeoutError as ListTeamRolesGatewayTimeoutError } from "./types/ListTeamRoles/ListTeamRolesError";
import { BadRequestError as ListTeamUserGroupsBadRequestError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { UnauthorizedError as ListTeamUserGroupsUnauthorizedError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { NotFoundError as ListTeamUserGroupsNotFoundError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { InternalServerError as ListTeamUserGroupsInternalServerError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { BadGatewayError as ListTeamUserGroupsBadGatewayError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { GatewayTimeoutError as ListTeamUserGroupsGatewayTimeoutError } from "./types/ListTeamUserGroups/ListTeamUserGroupsError";
import { BadRequestError as ListTeamUserRolesBadRequestError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { UnauthorizedError as ListTeamUserRolesUnauthorizedError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { NotFoundError as ListTeamUserRolesNotFoundError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { InternalServerError as ListTeamUserRolesInternalServerError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { BadGatewayError as ListTeamUserRolesBadGatewayError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { GatewayTimeoutError as ListTeamUserRolesGatewayTimeoutError } from "./types/ListTeamUserRoles/ListTeamUserRolesError";
import { BadRequestError as ListTeamUsersBadRequestError } from "./types/ListTeamUsers/ListTeamUsersError";
import { UnauthorizedError as ListTeamUsersUnauthorizedError } from "./types/ListTeamUsers/ListTeamUsersError";
import { NotFoundError as ListTeamUsersNotFoundError } from "./types/ListTeamUsers/ListTeamUsersError";
import { InternalServerError as ListTeamUsersInternalServerError } from "./types/ListTeamUsers/ListTeamUsersError";
import { BadGatewayError as ListTeamUsersBadGatewayError } from "./types/ListTeamUsers/ListTeamUsersError";
import { GatewayTimeoutError as ListTeamUsersGatewayTimeoutError } from "./types/ListTeamUsers/ListTeamUsersError";
import { BadRequestError as ListTeamsBadRequestError } from "./types/ListTeams/ListTeamsError";
import { UnauthorizedError as ListTeamsUnauthorizedError } from "./types/ListTeams/ListTeamsError";
import { InternalServerError as ListTeamsInternalServerError } from "./types/ListTeams/ListTeamsError";
import { BadGatewayError as ListTeamsBadGatewayError } from "./types/ListTeams/ListTeamsError";
import { GatewayTimeoutError as ListTeamsGatewayTimeoutError } from "./types/ListTeams/ListTeamsError";
import { BadRequestError as ListUserGroupsBadRequestError } from "./types/ListUserGroups/ListUserGroupsError";
import { UnauthorizedError as ListUserGroupsUnauthorizedError } from "./types/ListUserGroups/ListUserGroupsError";
import { NotFoundError as ListUserGroupsNotFoundError } from "./types/ListUserGroups/ListUserGroupsError";
import { InternalServerError as ListUserGroupsInternalServerError } from "./types/ListUserGroups/ListUserGroupsError";
import { BadGatewayError as ListUserGroupsBadGatewayError } from "./types/ListUserGroups/ListUserGroupsError";
import { GatewayTimeoutError as ListUserGroupsGatewayTimeoutError } from "./types/ListUserGroups/ListUserGroupsError";
import { BadRequestError as ListUserGroupsRolesBadRequestError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { UnauthorizedError as ListUserGroupsRolesUnauthorizedError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { NotFoundError as ListUserGroupsRolesNotFoundError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { InternalServerError as ListUserGroupsRolesInternalServerError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { BadGatewayError as ListUserGroupsRolesBadGatewayError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { GatewayTimeoutError as ListUserGroupsRolesGatewayTimeoutError } from "./types/ListUserGroupsRoles/ListUserGroupsRolesError";
import { BadRequestError as ListUserGroupsTeamsBadRequestError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { UnauthorizedError as ListUserGroupsTeamsUnauthorizedError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { NotFoundError as ListUserGroupsTeamsNotFoundError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { InternalServerError as ListUserGroupsTeamsInternalServerError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { BadGatewayError as ListUserGroupsTeamsBadGatewayError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { GatewayTimeoutError as ListUserGroupsTeamsGatewayTimeoutError } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsError";
import { BadRequestError as ListUserRolesBadRequestError } from "./types/ListUserRoles/ListUserRolesError";
import { UnauthorizedError as ListUserRolesUnauthorizedError } from "./types/ListUserRoles/ListUserRolesError";
import { NotFoundError as ListUserRolesNotFoundError } from "./types/ListUserRoles/ListUserRolesError";
import { InternalServerError as ListUserRolesInternalServerError } from "./types/ListUserRoles/ListUserRolesError";
import { BadGatewayError as ListUserRolesBadGatewayError } from "./types/ListUserRoles/ListUserRolesError";
import { GatewayTimeoutError as ListUserRolesGatewayTimeoutError } from "./types/ListUserRoles/ListUserRolesError";
import { BadRequestError as ListUserTeamsBadRequestError } from "./types/ListUserTeams/ListUserTeamsError";
import { UnauthorizedError as ListUserTeamsUnauthorizedError } from "./types/ListUserTeams/ListUserTeamsError";
import { NotFoundError as ListUserTeamsNotFoundError } from "./types/ListUserTeams/ListUserTeamsError";
import { InternalServerError as ListUserTeamsInternalServerError } from "./types/ListUserTeams/ListUserTeamsError";
import { BadGatewayError as ListUserTeamsBadGatewayError } from "./types/ListUserTeams/ListUserTeamsError";
import { GatewayTimeoutError as ListUserTeamsGatewayTimeoutError } from "./types/ListUserTeams/ListUserTeamsError";
import { BadRequestError as ListUsersBadRequestError } from "./types/ListUsers/ListUsersError";
import { UnauthorizedError as ListUsersUnauthorizedError } from "./types/ListUsers/ListUsersError";
import { InternalServerError as ListUsersInternalServerError } from "./types/ListUsers/ListUsersError";
import { BadGatewayError as ListUsersBadGatewayError } from "./types/ListUsers/ListUsersError";
import { GatewayTimeoutError as ListUsersGatewayTimeoutError } from "./types/ListUsers/ListUsersError";
import { BadRequestError as ListUsersSCIMBadRequestError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { UnauthorizedError as ListUsersSCIMUnauthorizedError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { InternalServerError as ListUsersSCIMInternalServerError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { BadGatewayError as ListUsersSCIMBadGatewayError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { GatewayTimeoutError as ListUsersSCIMGatewayTimeoutError } from "./types/ListUsersSCIM/ListUsersSCIMError";
import { BadRequestError as PatchGroupSCIMBadRequestError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { UnauthorizedError as PatchGroupSCIMUnauthorizedError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { NotFoundError as PatchGroupSCIMNotFoundError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { InternalServerError as PatchGroupSCIMInternalServerError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { BadGatewayError as PatchGroupSCIMBadGatewayError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { GatewayTimeoutError as PatchGroupSCIMGatewayTimeoutError } from "./types/PatchGroupSCIM/PatchGroupSCIMError";
import { BadRequestError as PatchUserSCIMBadRequestError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { UnauthorizedError as PatchUserSCIMUnauthorizedError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { NotFoundError as PatchUserSCIMNotFoundError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { InternalServerError as PatchUserSCIMInternalServerError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { BadGatewayError as PatchUserSCIMBadGatewayError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { GatewayTimeoutError as PatchUserSCIMGatewayTimeoutError } from "./types/PatchUserSCIM/PatchUserSCIMError";
import { BadRequestError as RenewTokenBadRequestError } from "./types/RenewToken/RenewTokenError";
import { PasswordRevokedError as RenewTokenPasswordRevokedError } from "./types/RenewToken/RenewTokenError";
import { IdentityDisabledError as RenewTokenIdentityDisabledError } from "./types/RenewToken/RenewTokenError";
import { NotAllowedError as RenewTokenNotAllowedError } from "./types/RenewToken/RenewTokenError";
import { InvalidRefreshTokenError as RenewTokenInvalidRefreshTokenError } from "./types/RenewToken/RenewTokenError";
import { InternalServerError as RenewTokenInternalServerError } from "./types/RenewToken/RenewTokenError";
import { BadGatewayError as RenewTokenBadGatewayError } from "./types/RenewToken/RenewTokenError";
import { GatewayTimeoutError as RenewTokenGatewayTimeoutError } from "./types/RenewToken/RenewTokenError";
import { BadRequestError as ResetPasswordBadRequestError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidSecretError as ResetPasswordInvalidSecretError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidPasswordSecretError as ResetPasswordInvalidPasswordSecretError } from "./types/ResetPassword/ResetPasswordError";
import { ExpiredPasswordSecretError as ResetPasswordExpiredPasswordSecretError } from "./types/ResetPassword/ResetPasswordError";
import { InternalServerError as ResetPasswordInternalServerError } from "./types/ResetPassword/ResetPasswordError";
import { BadGatewayError as ResetPasswordBadGatewayError } from "./types/ResetPassword/ResetPasswordError";
import { GatewayTimeoutError as ResetPasswordGatewayTimeoutError } from "./types/ResetPassword/ResetPasswordError";
import { BadRequestError as RotateKeyBadRequestError } from "./types/RotateKey/RotateKeyError";
import { UnauthorizedError as RotateKeyUnauthorizedError } from "./types/RotateKey/RotateKeyError";
import { InternalServerError as RotateKeyInternalServerError } from "./types/RotateKey/RotateKeyError";
import { BadGatewayError as RotateKeyBadGatewayError } from "./types/RotateKey/RotateKeyError";
import { GatewayTimeoutError as RotateKeyGatewayTimeoutError } from "./types/RotateKey/RotateKeyError";
import { BadRequestError as RotateUserKeyBadRequestError } from "./types/RotateUserKey/RotateUserKeyError";
import { UnauthorizedError as RotateUserKeyUnauthorizedError } from "./types/RotateUserKey/RotateUserKeyError";
import { NotFoundError as RotateUserKeyNotFoundError } from "./types/RotateUserKey/RotateUserKeyError";
import { InternalServerError as RotateUserKeyInternalServerError } from "./types/RotateUserKey/RotateUserKeyError";
import { BadGatewayError as RotateUserKeyBadGatewayError } from "./types/RotateUserKey/RotateUserKeyError";
import { GatewayTimeoutError as RotateUserKeyGatewayTimeoutError } from "./types/RotateUserKey/RotateUserKeyError";
import { BadRequestError as SSOSignInBadRequestError } from "./types/SSOSignIn/SSOSignInError";
import { ConflictError as SSOSignInConflictError } from "./types/SSOSignIn/SSOSignInError";
import { InternalServerError as SSOSignInInternalServerError } from "./types/SSOSignIn/SSOSignInError";
import { BadGatewayError as SSOSignInBadGatewayError } from "./types/SSOSignIn/SSOSignInError";
import { GatewayTimeoutError as SSOSignInGatewayTimeoutError } from "./types/SSOSignIn/SSOSignInError";
import { BadRequestError as SamlSignOnBadRequestError } from "./types/SamlSignOn/SamlSignOnError";
import { WrongConfigError as SamlSignOnWrongConfigError } from "./types/SamlSignOn/SamlSignOnError";
import { NotFoundError as SamlSignOnNotFoundError } from "./types/SamlSignOn/SamlSignOnError";
import { ConflictError as SamlSignOnConflictError } from "./types/SamlSignOn/SamlSignOnError";
import { InternalServerError as SamlSignOnInternalServerError } from "./types/SamlSignOn/SamlSignOnError";
import { BadGatewayError as SamlSignOnBadGatewayError } from "./types/SamlSignOn/SamlSignOnError";
import { GatewayTimeoutError as SamlSignOnGatewayTimeoutError } from "./types/SamlSignOn/SamlSignOnError";
import { BadRequestError as UpdateAccountBadRequestError } from "./types/UpdateAccount/UpdateAccountError";
import { UnauthorizedError as UpdateAccountUnauthorizedError } from "./types/UpdateAccount/UpdateAccountError";
import { ConflictError as UpdateAccountConflictError } from "./types/UpdateAccount/UpdateAccountError";
import { InternalServerError as UpdateAccountInternalServerError } from "./types/UpdateAccount/UpdateAccountError";
import { BadGatewayError as UpdateAccountBadGatewayError } from "./types/UpdateAccount/UpdateAccountError";
import { GatewayTimeoutError as UpdateAccountGatewayTimeoutError } from "./types/UpdateAccount/UpdateAccountError";
import { BadRequestError as UpdateGroupBadRequestError } from "./types/UpdateGroup/UpdateGroupError";
import { UnauthorizedError as UpdateGroupUnauthorizedError } from "./types/UpdateGroup/UpdateGroupError";
import { NotFoundError as UpdateGroupNotFoundError } from "./types/UpdateGroup/UpdateGroupError";
import { InternalServerError as UpdateGroupInternalServerError } from "./types/UpdateGroup/UpdateGroupError";
import { BadGatewayError as UpdateGroupBadGatewayError } from "./types/UpdateGroup/UpdateGroupError";
import { GatewayTimeoutError as UpdateGroupGatewayTimeoutError } from "./types/UpdateGroup/UpdateGroupError";
import { BadRequestError as UpdateGroupSCIMBadRequestError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { UnauthorizedError as UpdateGroupSCIMUnauthorizedError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { NotFoundError as UpdateGroupSCIMNotFoundError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { InternalServerError as UpdateGroupSCIMInternalServerError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { BadGatewayError as UpdateGroupSCIMBadGatewayError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { GatewayTimeoutError as UpdateGroupSCIMGatewayTimeoutError } from "./types/UpdateGroupSCIM/UpdateGroupSCIMError";
import { BadRequestError as UpdateManagedPolicyBadRequestError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { UnauthorizedError as UpdateManagedPolicyUnauthorizedError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { NotFoundError as UpdateManagedPolicyNotFoundError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { InternalServerError as UpdateManagedPolicyInternalServerError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { BadGatewayError as UpdateManagedPolicyBadGatewayError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { GatewayTimeoutError as UpdateManagedPolicyGatewayTimeoutError } from "./types/UpdateManagedPolicy/UpdateManagedPolicyError";
import { BadRequestError as UpdatePasswordBadRequestError } from "./types/UpdatePassword/UpdatePasswordError";
import { UnauthorizedError as UpdatePasswordUnauthorizedError } from "./types/UpdatePassword/UpdatePasswordError";
import { NotMatchError as UpdatePasswordNotMatchError } from "./types/UpdatePassword/UpdatePasswordError";
import { WrongAuthError as UpdatePasswordWrongAuthError } from "./types/UpdatePassword/UpdatePasswordError";
import { InternalServerError as UpdatePasswordInternalServerError } from "./types/UpdatePassword/UpdatePasswordError";
import { BadGatewayError as UpdatePasswordBadGatewayError } from "./types/UpdatePassword/UpdatePasswordError";
import { GatewayTimeoutError as UpdatePasswordGatewayTimeoutError } from "./types/UpdatePassword/UpdatePasswordError";
import { BadRequestError as UpdatePolicyBadRequestError } from "./types/UpdatePolicy/UpdatePolicyError";
import { UnauthorizedError as UpdatePolicyUnauthorizedError } from "./types/UpdatePolicy/UpdatePolicyError";
import { NotFoundError as UpdatePolicyNotFoundError } from "./types/UpdatePolicy/UpdatePolicyError";
import { InternalServerError as UpdatePolicyInternalServerError } from "./types/UpdatePolicy/UpdatePolicyError";
import { BadGatewayError as UpdatePolicyBadGatewayError } from "./types/UpdatePolicy/UpdatePolicyError";
import { GatewayTimeoutError as UpdatePolicyGatewayTimeoutError } from "./types/UpdatePolicy/UpdatePolicyError";
import { BadRequestError as UpdateProviderBadRequestError } from "./types/UpdateProvider/UpdateProviderError";
import { UnauthorizedError as UpdateProviderUnauthorizedError } from "./types/UpdateProvider/UpdateProviderError";
import { NotFoundError as UpdateProviderNotFoundError } from "./types/UpdateProvider/UpdateProviderError";
import { InternalServerError as UpdateProviderInternalServerError } from "./types/UpdateProvider/UpdateProviderError";
import { BadGatewayError as UpdateProviderBadGatewayError } from "./types/UpdateProvider/UpdateProviderError";
import { GatewayTimeoutError as UpdateProviderGatewayTimeoutError } from "./types/UpdateProvider/UpdateProviderError";
import { BadRequestError as UpdateRoleBadRequestError } from "./types/UpdateRole/UpdateRoleError";
import { UnauthorizedError as UpdateRoleUnauthorizedError } from "./types/UpdateRole/UpdateRoleError";
import { NotFoundError as UpdateRoleNotFoundError } from "./types/UpdateRole/UpdateRoleError";
import { InternalServerError as UpdateRoleInternalServerError } from "./types/UpdateRole/UpdateRoleError";
import { BadGatewayError as UpdateRoleBadGatewayError } from "./types/UpdateRole/UpdateRoleError";
import { GatewayTimeoutError as UpdateRoleGatewayTimeoutError } from "./types/UpdateRole/UpdateRoleError";
import { BadRequestError as AcceptInvitationBadRequestError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InvalidSecretError as AcceptInvitationInvalidSecretError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InvalidInviteError as AcceptInvitationInvalidInviteError } from "./types/AcceptInvitation/AcceptInvitationError";
import { ExpiredSecretError as AcceptInvitationExpiredSecretError } from "./types/AcceptInvitation/AcceptInvitationError";
import { InternalServerError as AcceptInvitationInternalServerError } from "./types/AcceptInvitation/AcceptInvitationError";
import { BadGatewayError as AcceptInvitationBadGatewayError } from "./types/AcceptInvitation/AcceptInvitationError";
import { GatewayTimeoutError as AcceptInvitationGatewayTimeoutError } from "./types/AcceptInvitation/AcceptInvitationError";
import { BadRequestError as AcceptUserInvitationBadRequestError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { InvalidSecretError as AcceptUserInvitationInvalidSecretError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { InvalidInviteError as AcceptUserInvitationInvalidInviteError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { ExpiredSecretError as AcceptUserInvitationExpiredSecretError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { InternalServerError as AcceptUserInvitationInternalServerError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { BadGatewayError as AcceptUserInvitationBadGatewayError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { GatewayTimeoutError as AcceptUserInvitationGatewayTimeoutError } from "./types/AcceptUserInvitation/AcceptUserInvitationError";
import { BadRequestError as AttachGroupRoleBadRequestError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { UnauthorizedError as AttachGroupRoleUnauthorizedError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { NotFoundError as AttachGroupRoleNotFoundError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { InternalServerError as AttachGroupRoleInternalServerError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { BadGatewayError as AttachGroupRoleBadGatewayError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { GatewayTimeoutError as AttachGroupRoleGatewayTimeoutError } from "./types/AttachGroupRole/AttachGroupRoleError";
import { BadRequestError as AttachGroupUserBadRequestError } from "./types/AttachGroupUser/AttachGroupUserError";
import { UnauthorizedError as AttachGroupUserUnauthorizedError } from "./types/AttachGroupUser/AttachGroupUserError";
import { NotFoundError as AttachGroupUserNotFoundError } from "./types/AttachGroupUser/AttachGroupUserError";
import { InternalServerError as AttachGroupUserInternalServerError } from "./types/AttachGroupUser/AttachGroupUserError";
import { BadGatewayError as AttachGroupUserBadGatewayError } from "./types/AttachGroupUser/AttachGroupUserError";
import { GatewayTimeoutError as AttachGroupUserGatewayTimeoutError } from "./types/AttachGroupUser/AttachGroupUserError";
import { BadRequestError as AttachRolePolicyBadRequestError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { UnauthorizedError as AttachRolePolicyUnauthorizedError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { NotFoundError as AttachRolePolicyNotFoundError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { InternalServerError as AttachRolePolicyInternalServerError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { BadGatewayError as AttachRolePolicyBadGatewayError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { GatewayTimeoutError as AttachRolePolicyGatewayTimeoutError } from "./types/AttachRolePolicy/AttachRolePolicyError";
import { BadRequestError as AttachTeamGroupBadRequestError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { UnauthorizedError as AttachTeamGroupUnauthorizedError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { NotFoundError as AttachTeamGroupNotFoundError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { InternalServerError as AttachTeamGroupInternalServerError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { BadGatewayError as AttachTeamGroupBadGatewayError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { GatewayTimeoutError as AttachTeamGroupGatewayTimeoutError } from "./types/AttachTeamGroup/AttachTeamGroupError";
import { BadRequestError as AttachTeamGroupRoleBadRequestError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { UnauthorizedError as AttachTeamGroupRoleUnauthorizedError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { NotFoundError as AttachTeamGroupRoleNotFoundError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { InternalServerError as AttachTeamGroupRoleInternalServerError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { BadGatewayError as AttachTeamGroupRoleBadGatewayError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { GatewayTimeoutError as AttachTeamGroupRoleGatewayTimeoutError } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleError";
import { BadRequestError as AttachTeamGroupUserBadRequestError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { UnauthorizedError as AttachTeamGroupUserUnauthorizedError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { NotFoundError as AttachTeamGroupUserNotFoundError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { InternalServerError as AttachTeamGroupUserInternalServerError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { BadGatewayError as AttachTeamGroupUserBadGatewayError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { GatewayTimeoutError as AttachTeamGroupUserGatewayTimeoutError } from "./types/AttachTeamGroupUser/AttachTeamGroupUserError";
import { BadRequestError as AttachTeamRoleBadRequestError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { UnauthorizedError as AttachTeamRoleUnauthorizedError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { NotFoundError as AttachTeamRoleNotFoundError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { ConflictError as AttachTeamRoleConflictError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { InternalServerError as AttachTeamRoleInternalServerError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { BadGatewayError as AttachTeamRoleBadGatewayError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { GatewayTimeoutError as AttachTeamRoleGatewayTimeoutError } from "./types/AttachTeamRole/AttachTeamRoleError";
import { BadRequestError as AttachTeamUserBadRequestError } from "./types/AttachTeamUser/AttachTeamUserError";
import { UnauthorizedError as AttachTeamUserUnauthorizedError } from "./types/AttachTeamUser/AttachTeamUserError";
import { NotFoundError as AttachTeamUserNotFoundError } from "./types/AttachTeamUser/AttachTeamUserError";
import { InternalServerError as AttachTeamUserInternalServerError } from "./types/AttachTeamUser/AttachTeamUserError";
import { BadGatewayError as AttachTeamUserBadGatewayError } from "./types/AttachTeamUser/AttachTeamUserError";
import { GatewayTimeoutError as AttachTeamUserGatewayTimeoutError } from "./types/AttachTeamUser/AttachTeamUserError";
import { BadRequestError as AttachTeamUserRoleBadRequestError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { UnauthorizedError as AttachTeamUserRoleUnauthorizedError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { NotFoundError as AttachTeamUserRoleNotFoundError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { InternalServerError as AttachTeamUserRoleInternalServerError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { BadGatewayError as AttachTeamUserRoleBadGatewayError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { GatewayTimeoutError as AttachTeamUserRoleGatewayTimeoutError } from "./types/AttachTeamUserRole/AttachTeamUserRoleError";
import { BadRequestError as AttachUserRoleBadRequestError } from "./types/AttachUserRole/AttachUserRoleError";
import { UnauthorizedError as AttachUserRoleUnauthorizedError } from "./types/AttachUserRole/AttachUserRoleError";
import { NotFoundError as AttachUserRoleNotFoundError } from "./types/AttachUserRole/AttachUserRoleError";
import { InternalServerError as AttachUserRoleInternalServerError } from "./types/AttachUserRole/AttachUserRoleError";
import { BadGatewayError as AttachUserRoleBadGatewayError } from "./types/AttachUserRole/AttachUserRoleError";
import { GatewayTimeoutError as AttachUserRoleGatewayTimeoutError } from "./types/AttachUserRole/AttachUserRoleError";
import { BadRequestError as ChangePasswordBadRequestError } from "./types/ChangePassword/ChangePasswordError";
import { InvalidPasswordSecretError as ChangePasswordInvalidPasswordSecretError } from "./types/ChangePassword/ChangePasswordError";
import { ExpiredPasswordSecretError as ChangePasswordExpiredPasswordSecretError } from "./types/ChangePassword/ChangePasswordError";
import { InternalServerError as ChangePasswordInternalServerError } from "./types/ChangePassword/ChangePasswordError";
import { BadGatewayError as ChangePasswordBadGatewayError } from "./types/ChangePassword/ChangePasswordError";
import { GatewayTimeoutError as ChangePasswordGatewayTimeoutError } from "./types/ChangePassword/ChangePasswordError";
import { BadRequestError as CreateAccountBadRequestError } from "./types/CreateAccount/CreateAccountError";
import { ConflictError as CreateAccountConflictError } from "./types/CreateAccount/CreateAccountError";
import { InternalServerError as CreateAccountInternalServerError } from "./types/CreateAccount/CreateAccountError";
import { BadGatewayError as CreateAccountBadGatewayError } from "./types/CreateAccount/CreateAccountError";
import { GatewayTimeoutError as CreateAccountGatewayTimeoutError } from "./types/CreateAccount/CreateAccountError";
import { BadRequestError as CreateGroupBadRequestError } from "./types/CreateGroup/CreateGroupError";
import { UnauthorizedError as CreateGroupUnauthorizedError } from "./types/CreateGroup/CreateGroupError";
import { ConflictError as CreateGroupConflictError } from "./types/CreateGroup/CreateGroupError";
import { InternalServerError as CreateGroupInternalServerError } from "./types/CreateGroup/CreateGroupError";
import { BadGatewayError as CreateGroupBadGatewayError } from "./types/CreateGroup/CreateGroupError";
import { GatewayTimeoutError as CreateGroupGatewayTimeoutError } from "./types/CreateGroup/CreateGroupError";
import { BadRequestError as CreateGroupSCIMBadRequestError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { UnauthorizedError as CreateGroupSCIMUnauthorizedError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { ConflictError as CreateGroupSCIMConflictError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { InternalServerError as CreateGroupSCIMInternalServerError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { BadGatewayError as CreateGroupSCIMBadGatewayError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { GatewayTimeoutError as CreateGroupSCIMGatewayTimeoutError } from "./types/CreateGroupSCIM/CreateGroupSCIMError";
import { BadRequestError as CreatePolicyBadRequestError } from "./types/CreatePolicy/CreatePolicyError";
import { UnauthorizedError as CreatePolicyUnauthorizedError } from "./types/CreatePolicy/CreatePolicyError";
import { ConflictError as CreatePolicyConflictError } from "./types/CreatePolicy/CreatePolicyError";
import { InternalServerError as CreatePolicyInternalServerError } from "./types/CreatePolicy/CreatePolicyError";
import { BadGatewayError as CreatePolicyBadGatewayError } from "./types/CreatePolicy/CreatePolicyError";
import { GatewayTimeoutError as CreatePolicyGatewayTimeoutError } from "./types/CreatePolicy/CreatePolicyError";
import { BadRequestError as CreateProviderBadRequestError } from "./types/CreateProvider/CreateProviderError";
import { UnauthorizedError as CreateProviderUnauthorizedError } from "./types/CreateProvider/CreateProviderError";
import { ConflictError as CreateProviderConflictError } from "./types/CreateProvider/CreateProviderError";
import { InternalServerError as CreateProviderInternalServerError } from "./types/CreateProvider/CreateProviderError";
import { BadGatewayError as CreateProviderBadGatewayError } from "./types/CreateProvider/CreateProviderError";
import { GatewayTimeoutError as CreateProviderGatewayTimeoutError } from "./types/CreateProvider/CreateProviderError";
import { BadRequestError as CreateRoleBadRequestError } from "./types/CreateRole/CreateRoleError";
import { UnauthorizedError as CreateRoleUnauthorizedError } from "./types/CreateRole/CreateRoleError";
import { ConflictError as CreateRoleConflictError } from "./types/CreateRole/CreateRoleError";
import { InternalServerError as CreateRoleInternalServerError } from "./types/CreateRole/CreateRoleError";
import { BadGatewayError as CreateRoleBadGatewayError } from "./types/CreateRole/CreateRoleError";
import { GatewayTimeoutError as CreateRoleGatewayTimeoutError } from "./types/CreateRole/CreateRoleError";
import { BadRequestError as CreateTeamBadRequestError } from "./types/CreateTeam/CreateTeamError";
import { UnauthorizedError as CreateTeamUnauthorizedError } from "./types/CreateTeam/CreateTeamError";
import { ConflictError as CreateTeamConflictError } from "./types/CreateTeam/CreateTeamError";
import { InternalServerError as CreateTeamInternalServerError } from "./types/CreateTeam/CreateTeamError";
import { BadGatewayError as CreateTeamBadGatewayError } from "./types/CreateTeam/CreateTeamError";
import { GatewayTimeoutError as CreateTeamGatewayTimeoutError } from "./types/CreateTeam/CreateTeamError";
import { BadRequestError as CreateTokenBadRequestError } from "./types/CreateToken/CreateTokenError";
import { BadCredentialsError as CreateTokenBadCredentialsError } from "./types/CreateToken/CreateTokenError";
import { PasswordRevokedError as CreateTokenPasswordRevokedError } from "./types/CreateToken/CreateTokenError";
import { IdentityDisabledError as CreateTokenIdentityDisabledError } from "./types/CreateToken/CreateTokenError";
import { WrongAuthError as CreateTokenWrongAuthError } from "./types/CreateToken/CreateTokenError";
import { NotFoundError as CreateTokenNotFoundError } from "./types/CreateToken/CreateTokenError";
import { ConflictError as CreateTokenConflictError } from "./types/CreateToken/CreateTokenError";
import { InternalServerError as CreateTokenInternalServerError } from "./types/CreateToken/CreateTokenError";
import { BadGatewayError as CreateTokenBadGatewayError } from "./types/CreateToken/CreateTokenError";
import { GatewayTimeoutError as CreateTokenGatewayTimeoutError } from "./types/CreateToken/CreateTokenError";
import { BadRequestError as CreateUserBadRequestError } from "./types/CreateUser/CreateUserError";
import { UnauthorizedError as CreateUserUnauthorizedError } from "./types/CreateUser/CreateUserError";
import { ForbiddenError as CreateUserForbiddenError } from "./types/CreateUser/CreateUserError";
import { ConflictError as CreateUserConflictError } from "./types/CreateUser/CreateUserError";
import { InternalServerError as CreateUserInternalServerError } from "./types/CreateUser/CreateUserError";
import { BadGatewayError as CreateUserBadGatewayError } from "./types/CreateUser/CreateUserError";
import { GatewayTimeoutError as CreateUserGatewayTimeoutError } from "./types/CreateUser/CreateUserError";
import { BadRequestError as CreateUserSCIMBadRequestError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { UnauthorizedError as CreateUserSCIMUnauthorizedError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { ConflictError as CreateUserSCIMConflictError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { InternalServerError as CreateUserSCIMInternalServerError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { BadGatewayError as CreateUserSCIMBadGatewayError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { GatewayTimeoutError as CreateUserSCIMGatewayTimeoutError } from "./types/CreateUserSCIM/CreateUserSCIMError";
import { BadRequestError as CreateUserTokenBadRequestError } from "./types/CreateUserToken/CreateUserTokenError";
import { UnauthorizedError as CreateUserTokenUnauthorizedError } from "./types/CreateUserToken/CreateUserTokenError";
import { IdentityDisabledError as CreateUserTokenIdentityDisabledError } from "./types/CreateUserToken/CreateUserTokenError";
import { ConflictError as CreateUserTokenConflictError } from "./types/CreateUserToken/CreateUserTokenError";
import { InternalServerError as CreateUserTokenInternalServerError } from "./types/CreateUserToken/CreateUserTokenError";
import { BadGatewayError as CreateUserTokenBadGatewayError } from "./types/CreateUserToken/CreateUserTokenError";
import { GatewayTimeoutError as CreateUserTokenGatewayTimeoutError } from "./types/CreateUserToken/CreateUserTokenError";
import { BadRequestError as DeleteAccountBadRequestError } from "./types/DeleteAccount/DeleteAccountError";
import { UnauthorizedError as DeleteAccountUnauthorizedError } from "./types/DeleteAccount/DeleteAccountError";
import { InternalServerError as DeleteAccountInternalServerError } from "./types/DeleteAccount/DeleteAccountError";
import { BadGatewayError as DeleteAccountBadGatewayError } from "./types/DeleteAccount/DeleteAccountError";
import { GatewayTimeoutError as DeleteAccountGatewayTimeoutError } from "./types/DeleteAccount/DeleteAccountError";
import { BadRequestError as DeleteGroupBadRequestError } from "./types/DeleteGroup/DeleteGroupError";
import { UnauthorizedError as DeleteGroupUnauthorizedError } from "./types/DeleteGroup/DeleteGroupError";
import { NotFoundError as DeleteGroupNotFoundError } from "./types/DeleteGroup/DeleteGroupError";
import { InternalServerError as DeleteGroupInternalServerError } from "./types/DeleteGroup/DeleteGroupError";
import { BadGatewayError as DeleteGroupBadGatewayError } from "./types/DeleteGroup/DeleteGroupError";
import { GatewayTimeoutError as DeleteGroupGatewayTimeoutError } from "./types/DeleteGroup/DeleteGroupError";
import { BadRequestError as DeleteGroupSCIMBadRequestError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { UnauthorizedError as DeleteGroupSCIMUnauthorizedError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { NotFoundError as DeleteGroupSCIMNotFoundError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { InternalServerError as DeleteGroupSCIMInternalServerError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { BadGatewayError as DeleteGroupSCIMBadGatewayError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { GatewayTimeoutError as DeleteGroupSCIMGatewayTimeoutError } from "./types/DeleteGroupSCIM/DeleteGroupSCIMError";
import { BadRequestError as DeletePolicyBadRequestError } from "./types/DeletePolicy/DeletePolicyError";
import { UnauthorizedError as DeletePolicyUnauthorizedError } from "./types/DeletePolicy/DeletePolicyError";
import { NotFoundError as DeletePolicyNotFoundError } from "./types/DeletePolicy/DeletePolicyError";
import { InternalServerError as DeletePolicyInternalServerError } from "./types/DeletePolicy/DeletePolicyError";
import { BadGatewayError as DeletePolicyBadGatewayError } from "./types/DeletePolicy/DeletePolicyError";
import { GatewayTimeoutError as DeletePolicyGatewayTimeoutError } from "./types/DeletePolicy/DeletePolicyError";
import { BadRequestError as DeleteProviderBadRequestError } from "./types/DeleteProvider/DeleteProviderError";
import { UnauthorizedError as DeleteProviderUnauthorizedError } from "./types/DeleteProvider/DeleteProviderError";
import { NotFoundError as DeleteProviderNotFoundError } from "./types/DeleteProvider/DeleteProviderError";
import { InternalServerError as DeleteProviderInternalServerError } from "./types/DeleteProvider/DeleteProviderError";
import { BadGatewayError as DeleteProviderBadGatewayError } from "./types/DeleteProvider/DeleteProviderError";
import { GatewayTimeoutError as DeleteProviderGatewayTimeoutError } from "./types/DeleteProvider/DeleteProviderError";
import { BadRequestError as DeleteRoleBadRequestError } from "./types/DeleteRole/DeleteRoleError";
import { UnauthorizedError as DeleteRoleUnauthorizedError } from "./types/DeleteRole/DeleteRoleError";
import { NotFoundError as DeleteRoleNotFoundError } from "./types/DeleteRole/DeleteRoleError";
import { InternalServerError as DeleteRoleInternalServerError } from "./types/DeleteRole/DeleteRoleError";
import { BadGatewayError as DeleteRoleBadGatewayError } from "./types/DeleteRole/DeleteRoleError";
import { GatewayTimeoutError as DeleteRoleGatewayTimeoutError } from "./types/DeleteRole/DeleteRoleError";
import { BadRequestError as DeleteTeamBadRequestError } from "./types/DeleteTeam/DeleteTeamError";
import { UnauthorizedError as DeleteTeamUnauthorizedError } from "./types/DeleteTeam/DeleteTeamError";
import { ForbiddenError as DeleteTeamForbiddenError } from "./types/DeleteTeam/DeleteTeamError";
import { NotFoundError as DeleteTeamNotFoundError } from "./types/DeleteTeam/DeleteTeamError";
import { InternalServerError as DeleteTeamInternalServerError } from "./types/DeleteTeam/DeleteTeamError";
import { BadGatewayError as DeleteTeamBadGatewayError } from "./types/DeleteTeam/DeleteTeamError";
import { GatewayTimeoutError as DeleteTeamGatewayTimeoutError } from "./types/DeleteTeam/DeleteTeamError";
import { BadRequestError as DeleteUserBadRequestError } from "./types/DeleteUser/DeleteUserError";
import { UnauthorizedError as DeleteUserUnauthorizedError } from "./types/DeleteUser/DeleteUserError";
import { ForbiddenHasUserError as DeleteUserForbiddenHasUserError } from "./types/DeleteUser/DeleteUserError";
import { ForbiddenHasRoleError as DeleteUserForbiddenHasRoleError } from "./types/DeleteUser/DeleteUserError";
import { ForbiddenHasGroupError as DeleteUserForbiddenHasGroupError } from "./types/DeleteUser/DeleteUserError";
import { NotFoundError as DeleteUserNotFoundError } from "./types/DeleteUser/DeleteUserError";
import { InternalServerError as DeleteUserInternalServerError } from "./types/DeleteUser/DeleteUserError";
import { BadGatewayError as DeleteUserBadGatewayError } from "./types/DeleteUser/DeleteUserError";
import { GatewayTimeoutError as DeleteUserGatewayTimeoutError } from "./types/DeleteUser/DeleteUserError";
import { BadRequestError as DeleteUserSCIMBadRequestError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { UnauthorizedError as DeleteUserSCIMUnauthorizedError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { NotFoundError as DeleteUserSCIMNotFoundError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { InternalServerError as DeleteUserSCIMInternalServerError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { BadGatewayError as DeleteUserSCIMBadGatewayError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { GatewayTimeoutError as DeleteUserSCIMGatewayTimeoutError } from "./types/DeleteUserSCIM/DeleteUserSCIMError";
import { BadRequestError as DetachGroupRoleBadRequestError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { UnauthorizedError as DetachGroupRoleUnauthorizedError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { NotFoundError as DetachGroupRoleNotFoundError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { InternalServerError as DetachGroupRoleInternalServerError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { BadGatewayError as DetachGroupRoleBadGatewayError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { GatewayTimeoutError as DetachGroupRoleGatewayTimeoutError } from "./types/DetachGroupRole/DetachGroupRoleError";
import { BadRequestError as DetachGroupUserBadRequestError } from "./types/DetachGroupUser/DetachGroupUserError";
import { UnauthorizedError as DetachGroupUserUnauthorizedError } from "./types/DetachGroupUser/DetachGroupUserError";
import { NotFoundError as DetachGroupUserNotFoundError } from "./types/DetachGroupUser/DetachGroupUserError";
import { InternalServerError as DetachGroupUserInternalServerError } from "./types/DetachGroupUser/DetachGroupUserError";
import { BadGatewayError as DetachGroupUserBadGatewayError } from "./types/DetachGroupUser/DetachGroupUserError";
import { GatewayTimeoutError as DetachGroupUserGatewayTimeoutError } from "./types/DetachGroupUser/DetachGroupUserError";
import { BadRequestError as DetachRolePolicyBadRequestError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { UnauthorizedError as DetachRolePolicyUnauthorizedError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { NotFoundError as DetachRolePolicyNotFoundError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { InternalServerError as DetachRolePolicyInternalServerError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { BadGatewayError as DetachRolePolicyBadGatewayError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { GatewayTimeoutError as DetachRolePolicyGatewayTimeoutError } from "./types/DetachRolePolicy/DetachRolePolicyError";
import { BadRequestError as DetachTeamGroupBadRequestError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { UnauthorizedError as DetachTeamGroupUnauthorizedError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { NotFoundError as DetachTeamGroupNotFoundError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { InternalServerError as DetachTeamGroupInternalServerError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { BadGatewayError as DetachTeamGroupBadGatewayError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { GatewayTimeoutError as DetachTeamGroupGatewayTimeoutError } from "./types/DetachTeamGroup/DetachTeamGroupError";
import { BadRequestError as DetachTeamGroupRoleBadRequestError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { UnauthorizedError as DetachTeamGroupRoleUnauthorizedError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { NotFoundError as DetachTeamGroupRoleNotFoundError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { InternalServerError as DetachTeamGroupRoleInternalServerError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { BadGatewayError as DetachTeamGroupRoleBadGatewayError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { GatewayTimeoutError as DetachTeamGroupRoleGatewayTimeoutError } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleError";
import { BadRequestError as DetachTeamGroupUserBadRequestError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { UnauthorizedError as DetachTeamGroupUserUnauthorizedError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { NotFoundError as DetachTeamGroupUserNotFoundError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { InternalServerError as DetachTeamGroupUserInternalServerError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { BadGatewayError as DetachTeamGroupUserBadGatewayError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { GatewayTimeoutError as DetachTeamGroupUserGatewayTimeoutError } from "./types/DetachTeamGroupUser/DetachTeamGroupUserError";
import { BadRequestError as DetachTeamRoleBadRequestError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { UnauthorizedError as DetachTeamRoleUnauthorizedError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { NotFoundError as DetachTeamRoleNotFoundError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { InternalServerError as DetachTeamRoleInternalServerError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { BadGatewayError as DetachTeamRoleBadGatewayError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { GatewayTimeoutError as DetachTeamRoleGatewayTimeoutError } from "./types/DetachTeamRole/DetachTeamRoleError";
import { BadRequestError as DetachTeamUserBadRequestError } from "./types/DetachTeamUser/DetachTeamUserError";
import { UnauthorizedError as DetachTeamUserUnauthorizedError } from "./types/DetachTeamUser/DetachTeamUserError";
import { NotFoundError as DetachTeamUserNotFoundError } from "./types/DetachTeamUser/DetachTeamUserError";
import { InternalServerError as DetachTeamUserInternalServerError } from "./types/DetachTeamUser/DetachTeamUserError";
import { BadGatewayError as DetachTeamUserBadGatewayError } from "./types/DetachTeamUser/DetachTeamUserError";
import { GatewayTimeoutError as DetachTeamUserGatewayTimeoutError } from "./types/DetachTeamUser/DetachTeamUserError";
import { BadRequestError as DetachTeamUserRoleBadRequestError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { UnauthorizedError as DetachTeamUserRoleUnauthorizedError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { NotFoundError as DetachTeamUserRoleNotFoundError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { InternalServerError as DetachTeamUserRoleInternalServerError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { BadGatewayError as DetachTeamUserRoleBadGatewayError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { GatewayTimeoutError as DetachTeamUserRoleGatewayTimeoutError } from "./types/DetachTeamUserRole/DetachTeamUserRoleError";
import { BadRequestError as DetachUserRoleBadRequestError } from "./types/DetachUserRole/DetachUserRoleError";
import { UnauthorizedError as DetachUserRoleUnauthorizedError } from "./types/DetachUserRole/DetachUserRoleError";
import { NotFoundError as DetachUserRoleNotFoundError } from "./types/DetachUserRole/DetachUserRoleError";
import { InternalServerError as DetachUserRoleInternalServerError } from "./types/DetachUserRole/DetachUserRoleError";
import { BadGatewayError as DetachUserRoleBadGatewayError } from "./types/DetachUserRole/DetachUserRoleError";
import { GatewayTimeoutError as DetachUserRoleGatewayTimeoutError } from "./types/DetachUserRole/DetachUserRoleError";
import { BadRequestError as ForgotPasswordBadRequestError } from "./types/ForgotPassword/ForgotPasswordError";
import { InternalServerError as ForgotPasswordInternalServerError } from "./types/ForgotPassword/ForgotPasswordError";
import { BadGatewayError as ForgotPasswordBadGatewayError } from "./types/ForgotPassword/ForgotPasswordError";
import { GatewayTimeoutError as ForgotPasswordGatewayTimeoutError } from "./types/ForgotPassword/ForgotPasswordError";
import { BadRequestError as GetAccountBadRequestError } from "./types/GetAccount/GetAccountError";
import { UnauthorizedError as GetAccountUnauthorizedError } from "./types/GetAccount/GetAccountError";
import { InternalServerError as GetAccountInternalServerError } from "./types/GetAccount/GetAccountError";
import { BadGatewayError as GetAccountBadGatewayError } from "./types/GetAccount/GetAccountError";
import { GatewayTimeoutError as GetAccountGatewayTimeoutError } from "./types/GetAccount/GetAccountError";
import { BadRequestError as GetGroupBadRequestError } from "./types/GetGroup/GetGroupError";
import { UnauthorizedError as GetGroupUnauthorizedError } from "./types/GetGroup/GetGroupError";
import { NotFoundError as GetGroupNotFoundError } from "./types/GetGroup/GetGroupError";
import { InternalServerError as GetGroupInternalServerError } from "./types/GetGroup/GetGroupError";
import { BadGatewayError as GetGroupBadGatewayError } from "./types/GetGroup/GetGroupError";
import { GatewayTimeoutError as GetGroupGatewayTimeoutError } from "./types/GetGroup/GetGroupError";
import { BadRequestError as GetGroupSCIMBadRequestError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { UnauthorizedError as GetGroupSCIMUnauthorizedError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { NotFoundError as GetGroupSCIMNotFoundError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { InternalServerError as GetGroupSCIMInternalServerError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { BadGatewayError as GetGroupSCIMBadGatewayError } from "./types/GetGroupSCIM/GetGroupSCIMError";
import { GatewayTimeoutError as GetGroupSCIMGatewayTimeoutError } from "./types/GetGroupSCIM/GetGroupSCIMError";

export const errors = {
    UpdateTeamError: {
        BadRequest: UpdateTeamBadRequestError,
        Unauthorized: UpdateTeamUnauthorizedError,
        NotFound: UpdateTeamNotFoundError,
        InternalServerError: UpdateTeamInternalServerError,
        BadGateway: UpdateTeamBadGatewayError,
        GatewayTimeout: UpdateTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTeamGroupError: {
        BadRequest: UpdateTeamGroupBadRequestError,
        Unauthorized: UpdateTeamGroupUnauthorizedError,
        NotFound: UpdateTeamGroupNotFoundError,
        InternalServerError: UpdateTeamGroupInternalServerError,
        BadGateway: UpdateTeamGroupBadGatewayError,
        GatewayTimeout: UpdateTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTeamUserError: {
        BadRequest: UpdateTeamUserBadRequestError,
        Unauthorized: UpdateTeamUserUnauthorizedError,
        WrongAuth: UpdateTeamUserWrongAuthError,
        NotFound: UpdateTeamUserNotFoundError,
        InternalServerError: UpdateTeamUserInternalServerError,
        BadGateway: UpdateTeamUserBadGatewayError,
        GatewayTimeout: UpdateTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateUserError: {
        BadRequest: UpdateUserBadRequestError,
        Unauthorized: UpdateUserUnauthorizedError,
        WrongAuth: UpdateUserWrongAuthError,
        NotFound: UpdateUserNotFoundError,
        InternalServerError: UpdateUserInternalServerError,
        BadGateway: UpdateUserBadGatewayError,
        GatewayTimeout: UpdateUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateUserSCIMError: {
        BadRequest: UpdateUserSCIMBadRequestError,
        Unauthorized: UpdateUserSCIMUnauthorizedError,
        NotFound: UpdateUserSCIMNotFoundError,
        InternalServerError: UpdateUserSCIMInternalServerError,
        BadGateway: UpdateUserSCIMBadGatewayError,
        GatewayTimeout: UpdateUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetPolicyError: {
        BadRequest: GetPolicyBadRequestError,
        Unauthorized: GetPolicyUnauthorizedError,
        NotFound: GetPolicyNotFoundError,
        InternalServerError: GetPolicyInternalServerError,
        BadGateway: GetPolicyBadGatewayError,
        GatewayTimeout: GetPolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetProviderError: {
        BadRequest: GetProviderBadRequestError,
        Unauthorized: GetProviderUnauthorizedError,
        NotFound: GetProviderNotFoundError,
        InternalServerError: GetProviderInternalServerError,
        BadGateway: GetProviderBadGatewayError,
        GatewayTimeout: GetProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetResourceTypesError: {
        BadRequest: GetResourceTypesBadRequestError,
        Unauthorized: GetResourceTypesUnauthorizedError,
        InternalServerError: GetResourceTypesInternalServerError,
        BadGateway: GetResourceTypesBadGatewayError,
        GatewayTimeout: GetResourceTypesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetRoleError: {
        BadRequest: GetRoleBadRequestError,
        Unauthorized: GetRoleUnauthorizedError,
        NotFound: GetRoleNotFoundError,
        InternalServerError: GetRoleInternalServerError,
        BadGateway: GetRoleBadGatewayError,
        GatewayTimeout: GetRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetSchemasError: {
        BadRequest: GetSchemasBadRequestError,
        Unauthorized: GetSchemasUnauthorizedError,
        InternalServerError: GetSchemasInternalServerError,
        BadGateway: GetSchemasBadGatewayError,
        GatewayTimeout: GetSchemasGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetServiceProviderConfigError: {
        BadRequest: GetServiceProviderConfigBadRequestError,
        Unauthorized: GetServiceProviderConfigUnauthorizedError,
        InternalServerError: GetServiceProviderConfigInternalServerError,
        BadGateway: GetServiceProviderConfigBadGatewayError,
        GatewayTimeout: GetServiceProviderConfigGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetSigninConfigurationError: {
        BadRequest: GetSigninConfigurationBadRequestError,
        NotFound: GetSigninConfigurationNotFoundError,
        InternalServerError: GetSigninConfigurationInternalServerError,
        BadGateway: GetSigninConfigurationBadGatewayError,
        GatewayTimeout: GetSigninConfigurationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamError: {
        BadRequest: GetTeamBadRequestError,
        Unauthorized: GetTeamUnauthorizedError,
        NotFound: GetTeamNotFoundError,
        InternalServerError: GetTeamInternalServerError,
        BadGateway: GetTeamBadGatewayError,
        GatewayTimeout: GetTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamGroupError: {
        BadRequest: GetTeamGroupBadRequestError,
        Unauthorized: GetTeamGroupUnauthorizedError,
        NotFound: GetTeamGroupNotFoundError,
        InternalServerError: GetTeamGroupInternalServerError,
        BadGateway: GetTeamGroupBadGatewayError,
        GatewayTimeout: GetTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamUserError: {
        BadRequest: GetTeamUserBadRequestError,
        Unauthorized: GetTeamUserUnauthorizedError,
        NotFound: GetTeamUserNotFoundError,
        InternalServerError: GetTeamUserInternalServerError,
        BadGateway: GetTeamUserBadGatewayError,
        GatewayTimeout: GetTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserError: {
        BadRequest: GetUserBadRequestError,
        Unauthorized: GetUserUnauthorizedError,
        NotFound: GetUserNotFoundError,
        InternalServerError: GetUserInternalServerError,
        BadGateway: GetUserBadGatewayError,
        GatewayTimeout: GetUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserSCIMError: {
        BadRequest: GetUserSCIMBadRequestError,
        Unauthorized: GetUserSCIMUnauthorizedError,
        NotFound: GetUserSCIMNotFoundError,
        InternalServerError: GetUserSCIMInternalServerError,
        BadGateway: GetUserSCIMBadGatewayError,
        GatewayTimeout: GetUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InviteTeamUserError: {
        BadRequest: InviteTeamUserBadRequestError,
        Unauthorized: InviteTeamUserUnauthorizedError,
        NotFound: InviteTeamUserNotFoundError,
        InternalServerError: InviteTeamUserInternalServerError,
        BadGateway: InviteTeamUserBadGatewayError,
        GatewayTimeout: InviteTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InviteUserError: {
        BadRequest: InviteUserBadRequestError,
        Unauthorized: InviteUserUnauthorizedError,
        NotFound: InviteUserNotFoundError,
        InternalServerError: InviteUserInternalServerError,
        BadGateway: InviteUserBadGatewayError,
        GatewayTimeout: InviteUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupRolesError: {
        BadRequest: ListGroupRolesBadRequestError,
        Unauthorized: ListGroupRolesUnauthorizedError,
        NotFound: ListGroupRolesNotFoundError,
        InternalServerError: ListGroupRolesInternalServerError,
        BadGateway: ListGroupRolesBadGatewayError,
        GatewayTimeout: ListGroupRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupTeamsError: {
        BadRequest: ListGroupTeamsBadRequestError,
        Unauthorized: ListGroupTeamsUnauthorizedError,
        NotFound: ListGroupTeamsNotFoundError,
        InternalServerError: ListGroupTeamsInternalServerError,
        BadGateway: ListGroupTeamsBadGatewayError,
        GatewayTimeout: ListGroupTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupUsersError: {
        BadRequest: ListGroupUsersBadRequestError,
        Unauthorized: ListGroupUsersUnauthorizedError,
        NotFound: ListGroupUsersNotFoundError,
        InternalServerError: ListGroupUsersInternalServerError,
        BadGateway: ListGroupUsersBadGatewayError,
        GatewayTimeout: ListGroupUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupsError: {
        BadRequest: ListGroupsBadRequestError,
        Unauthorized: ListGroupsUnauthorizedError,
        NotFound: ListGroupsNotFoundError,
        InternalServerError: ListGroupsInternalServerError,
        BadGateway: ListGroupsBadGatewayError,
        GatewayTimeout: ListGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupsSCIMError: {
        BadRequest: ListGroupsSCIMBadRequestError,
        Unauthorized: ListGroupsSCIMUnauthorizedError,
        InternalServerError: ListGroupsSCIMInternalServerError,
        BadGateway: ListGroupsSCIMBadGatewayError,
        GatewayTimeout: ListGroupsSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListPoliciesError: {
        BadRequest: ListPoliciesBadRequestError,
        Unauthorized: ListPoliciesUnauthorizedError,
        InternalServerError: ListPoliciesInternalServerError,
        BadGateway: ListPoliciesBadGatewayError,
        GatewayTimeout: ListPoliciesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListProvidersError: {
        BadRequest: ListProvidersBadRequestError,
        Unauthorized: ListProvidersUnauthorizedError,
        InternalServerError: ListProvidersInternalServerError,
        BadGateway: ListProvidersBadGatewayError,
        GatewayTimeout: ListProvidersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListRolesError: {
        BadRequest: ListRolesBadRequestError,
        Unauthorized: ListRolesUnauthorizedError,
        InternalServerError: ListRolesInternalServerError,
        BadGateway: ListRolesBadGatewayError,
        GatewayTimeout: ListRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamGroupRolesError: {
        BadRequest: ListTeamGroupRolesBadRequestError,
        Unauthorized: ListTeamGroupRolesUnauthorizedError,
        NotFound: ListTeamGroupRolesNotFoundError,
        InternalServerError: ListTeamGroupRolesInternalServerError,
        BadGateway: ListTeamGroupRolesBadGatewayError,
        GatewayTimeout: ListTeamGroupRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamGroupUsersError: {
        BadRequest: ListTeamGroupUsersBadRequestError,
        Unauthorized: ListTeamGroupUsersUnauthorizedError,
        NotFound: ListTeamGroupUsersNotFoundError,
        InternalServerError: ListTeamGroupUsersInternalServerError,
        BadGateway: ListTeamGroupUsersBadGatewayError,
        GatewayTimeout: ListTeamGroupUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamGroupsError: {
        BadRequest: ListTeamGroupsBadRequestError,
        Unauthorized: ListTeamGroupsUnauthorizedError,
        NotFound: ListTeamGroupsNotFoundError,
        InternalServerError: ListTeamGroupsInternalServerError,
        BadGateway: ListTeamGroupsBadGatewayError,
        GatewayTimeout: ListTeamGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamRolesError: {
        BadRequest: ListTeamRolesBadRequestError,
        Unauthorized: ListTeamRolesUnauthorizedError,
        NotFound: ListTeamRolesNotFoundError,
        InternalServerError: ListTeamRolesInternalServerError,
        BadGateway: ListTeamRolesBadGatewayError,
        GatewayTimeout: ListTeamRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUserGroupsError: {
        BadRequest: ListTeamUserGroupsBadRequestError,
        Unauthorized: ListTeamUserGroupsUnauthorizedError,
        NotFound: ListTeamUserGroupsNotFoundError,
        InternalServerError: ListTeamUserGroupsInternalServerError,
        BadGateway: ListTeamUserGroupsBadGatewayError,
        GatewayTimeout: ListTeamUserGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUserRolesError: {
        BadRequest: ListTeamUserRolesBadRequestError,
        Unauthorized: ListTeamUserRolesUnauthorizedError,
        NotFound: ListTeamUserRolesNotFoundError,
        InternalServerError: ListTeamUserRolesInternalServerError,
        BadGateway: ListTeamUserRolesBadGatewayError,
        GatewayTimeout: ListTeamUserRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUsersError: {
        BadRequest: ListTeamUsersBadRequestError,
        Unauthorized: ListTeamUsersUnauthorizedError,
        NotFound: ListTeamUsersNotFoundError,
        InternalServerError: ListTeamUsersInternalServerError,
        BadGateway: ListTeamUsersBadGatewayError,
        GatewayTimeout: ListTeamUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamsError: {
        BadRequest: ListTeamsBadRequestError,
        Unauthorized: ListTeamsUnauthorizedError,
        InternalServerError: ListTeamsInternalServerError,
        BadGateway: ListTeamsBadGatewayError,
        GatewayTimeout: ListTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserGroupsError: {
        BadRequest: ListUserGroupsBadRequestError,
        Unauthorized: ListUserGroupsUnauthorizedError,
        NotFound: ListUserGroupsNotFoundError,
        InternalServerError: ListUserGroupsInternalServerError,
        BadGateway: ListUserGroupsBadGatewayError,
        GatewayTimeout: ListUserGroupsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserGroupsRolesError: {
        BadRequest: ListUserGroupsRolesBadRequestError,
        Unauthorized: ListUserGroupsRolesUnauthorizedError,
        NotFound: ListUserGroupsRolesNotFoundError,
        InternalServerError: ListUserGroupsRolesInternalServerError,
        BadGateway: ListUserGroupsRolesBadGatewayError,
        GatewayTimeout: ListUserGroupsRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserGroupsTeamsError: {
        BadRequest: ListUserGroupsTeamsBadRequestError,
        Unauthorized: ListUserGroupsTeamsUnauthorizedError,
        NotFound: ListUserGroupsTeamsNotFoundError,
        InternalServerError: ListUserGroupsTeamsInternalServerError,
        BadGateway: ListUserGroupsTeamsBadGatewayError,
        GatewayTimeout: ListUserGroupsTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserRolesError: {
        BadRequest: ListUserRolesBadRequestError,
        Unauthorized: ListUserRolesUnauthorizedError,
        NotFound: ListUserRolesNotFoundError,
        InternalServerError: ListUserRolesInternalServerError,
        BadGateway: ListUserRolesBadGatewayError,
        GatewayTimeout: ListUserRolesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTeamsError: {
        BadRequest: ListUserTeamsBadRequestError,
        Unauthorized: ListUserTeamsUnauthorizedError,
        NotFound: ListUserTeamsNotFoundError,
        InternalServerError: ListUserTeamsInternalServerError,
        BadGateway: ListUserTeamsBadGatewayError,
        GatewayTimeout: ListUserTeamsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUsersError: {
        BadRequest: ListUsersBadRequestError,
        Unauthorized: ListUsersUnauthorizedError,
        InternalServerError: ListUsersInternalServerError,
        BadGateway: ListUsersBadGatewayError,
        GatewayTimeout: ListUsersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUsersSCIMError: {
        BadRequest: ListUsersSCIMBadRequestError,
        Unauthorized: ListUsersSCIMUnauthorizedError,
        InternalServerError: ListUsersSCIMInternalServerError,
        BadGateway: ListUsersSCIMBadGatewayError,
        GatewayTimeout: ListUsersSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    PatchGroupSCIMError: {
        BadRequest: PatchGroupSCIMBadRequestError,
        Unauthorized: PatchGroupSCIMUnauthorizedError,
        NotFound: PatchGroupSCIMNotFoundError,
        InternalServerError: PatchGroupSCIMInternalServerError,
        BadGateway: PatchGroupSCIMBadGatewayError,
        GatewayTimeout: PatchGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    PatchUserSCIMError: {
        BadRequest: PatchUserSCIMBadRequestError,
        Unauthorized: PatchUserSCIMUnauthorizedError,
        NotFound: PatchUserSCIMNotFoundError,
        InternalServerError: PatchUserSCIMInternalServerError,
        BadGateway: PatchUserSCIMBadGatewayError,
        GatewayTimeout: PatchUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    RenewTokenError: {
        BadRequest: RenewTokenBadRequestError,
        PasswordRevoked: RenewTokenPasswordRevokedError,
        IdentityDisabled: RenewTokenIdentityDisabledError,
        NotAllowed: RenewTokenNotAllowedError,
        InvalidRefreshToken: RenewTokenInvalidRefreshTokenError,
        InternalServerError: RenewTokenInternalServerError,
        BadGateway: RenewTokenBadGatewayError,
        GatewayTimeout: RenewTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ResetPasswordError: {
        BadRequest: ResetPasswordBadRequestError,
        InvalidSecret: ResetPasswordInvalidSecretError,
        InvalidPasswordSecret: ResetPasswordInvalidPasswordSecretError,
        ExpiredPasswordSecret: ResetPasswordExpiredPasswordSecretError,
        InternalServerError: ResetPasswordInternalServerError,
        BadGateway: ResetPasswordBadGatewayError,
        GatewayTimeout: ResetPasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    RotateKeyError: {
        BadRequest: RotateKeyBadRequestError,
        Unauthorized: RotateKeyUnauthorizedError,
        InternalServerError: RotateKeyInternalServerError,
        BadGateway: RotateKeyBadGatewayError,
        GatewayTimeout: RotateKeyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    RotateUserKeyError: {
        BadRequest: RotateUserKeyBadRequestError,
        Unauthorized: RotateUserKeyUnauthorizedError,
        NotFound: RotateUserKeyNotFoundError,
        InternalServerError: RotateUserKeyInternalServerError,
        BadGateway: RotateUserKeyBadGatewayError,
        GatewayTimeout: RotateUserKeyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    SSOSignInError: {
        BadRequest: SSOSignInBadRequestError,
        Conflict: SSOSignInConflictError,
        InternalServerError: SSOSignInInternalServerError,
        BadGateway: SSOSignInBadGatewayError,
        GatewayTimeout: SSOSignInGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    SamlSignOnError: {
        BadRequest: SamlSignOnBadRequestError,
        WrongConfig: SamlSignOnWrongConfigError,
        NotFound: SamlSignOnNotFoundError,
        Conflict: SamlSignOnConflictError,
        InternalServerError: SamlSignOnInternalServerError,
        BadGateway: SamlSignOnBadGatewayError,
        GatewayTimeout: SamlSignOnGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateAccountError: {
        BadRequest: UpdateAccountBadRequestError,
        Unauthorized: UpdateAccountUnauthorizedError,
        Conflict: UpdateAccountConflictError,
        InternalServerError: UpdateAccountInternalServerError,
        BadGateway: UpdateAccountBadGatewayError,
        GatewayTimeout: UpdateAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateGroupError: {
        BadRequest: UpdateGroupBadRequestError,
        Unauthorized: UpdateGroupUnauthorizedError,
        NotFound: UpdateGroupNotFoundError,
        InternalServerError: UpdateGroupInternalServerError,
        BadGateway: UpdateGroupBadGatewayError,
        GatewayTimeout: UpdateGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateGroupSCIMError: {
        BadRequest: UpdateGroupSCIMBadRequestError,
        Unauthorized: UpdateGroupSCIMUnauthorizedError,
        NotFound: UpdateGroupSCIMNotFoundError,
        InternalServerError: UpdateGroupSCIMInternalServerError,
        BadGateway: UpdateGroupSCIMBadGatewayError,
        GatewayTimeout: UpdateGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateManagedPolicyError: {
        BadRequest: UpdateManagedPolicyBadRequestError,
        Unauthorized: UpdateManagedPolicyUnauthorizedError,
        NotFound: UpdateManagedPolicyNotFoundError,
        InternalServerError: UpdateManagedPolicyInternalServerError,
        BadGateway: UpdateManagedPolicyBadGatewayError,
        GatewayTimeout: UpdateManagedPolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdatePasswordError: {
        BadRequest: UpdatePasswordBadRequestError,
        Unauthorized: UpdatePasswordUnauthorizedError,
        NotMatch: UpdatePasswordNotMatchError,
        WrongAuth: UpdatePasswordWrongAuthError,
        InternalServerError: UpdatePasswordInternalServerError,
        BadGateway: UpdatePasswordBadGatewayError,
        GatewayTimeout: UpdatePasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdatePolicyError: {
        BadRequest: UpdatePolicyBadRequestError,
        Unauthorized: UpdatePolicyUnauthorizedError,
        NotFound: UpdatePolicyNotFoundError,
        InternalServerError: UpdatePolicyInternalServerError,
        BadGateway: UpdatePolicyBadGatewayError,
        GatewayTimeout: UpdatePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateProviderError: {
        BadRequest: UpdateProviderBadRequestError,
        Unauthorized: UpdateProviderUnauthorizedError,
        NotFound: UpdateProviderNotFoundError,
        InternalServerError: UpdateProviderInternalServerError,
        BadGateway: UpdateProviderBadGatewayError,
        GatewayTimeout: UpdateProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateRoleError: {
        BadRequest: UpdateRoleBadRequestError,
        Unauthorized: UpdateRoleUnauthorizedError,
        NotFound: UpdateRoleNotFoundError,
        InternalServerError: UpdateRoleInternalServerError,
        BadGateway: UpdateRoleBadGatewayError,
        GatewayTimeout: UpdateRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AcceptInvitationError: {
        BadRequest: AcceptInvitationBadRequestError,
        InvalidSecret: AcceptInvitationInvalidSecretError,
        InvalidInvite: AcceptInvitationInvalidInviteError,
        ExpiredSecret: AcceptInvitationExpiredSecretError,
        InternalServerError: AcceptInvitationInternalServerError,
        BadGateway: AcceptInvitationBadGatewayError,
        GatewayTimeout: AcceptInvitationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AcceptUserInvitationError: {
        BadRequest: AcceptUserInvitationBadRequestError,
        InvalidSecret: AcceptUserInvitationInvalidSecretError,
        InvalidInvite: AcceptUserInvitationInvalidInviteError,
        ExpiredSecret: AcceptUserInvitationExpiredSecretError,
        InternalServerError: AcceptUserInvitationInternalServerError,
        BadGateway: AcceptUserInvitationBadGatewayError,
        GatewayTimeout: AcceptUserInvitationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachGroupRoleError: {
        BadRequest: AttachGroupRoleBadRequestError,
        Unauthorized: AttachGroupRoleUnauthorizedError,
        NotFound: AttachGroupRoleNotFoundError,
        InternalServerError: AttachGroupRoleInternalServerError,
        BadGateway: AttachGroupRoleBadGatewayError,
        GatewayTimeout: AttachGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachGroupUserError: {
        BadRequest: AttachGroupUserBadRequestError,
        Unauthorized: AttachGroupUserUnauthorizedError,
        NotFound: AttachGroupUserNotFoundError,
        InternalServerError: AttachGroupUserInternalServerError,
        BadGateway: AttachGroupUserBadGatewayError,
        GatewayTimeout: AttachGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachRolePolicyError: {
        BadRequest: AttachRolePolicyBadRequestError,
        Unauthorized: AttachRolePolicyUnauthorizedError,
        NotFound: AttachRolePolicyNotFoundError,
        InternalServerError: AttachRolePolicyInternalServerError,
        BadGateway: AttachRolePolicyBadGatewayError,
        GatewayTimeout: AttachRolePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamGroupError: {
        BadRequest: AttachTeamGroupBadRequestError,
        Unauthorized: AttachTeamGroupUnauthorizedError,
        NotFound: AttachTeamGroupNotFoundError,
        InternalServerError: AttachTeamGroupInternalServerError,
        BadGateway: AttachTeamGroupBadGatewayError,
        GatewayTimeout: AttachTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamGroupRoleError: {
        BadRequest: AttachTeamGroupRoleBadRequestError,
        Unauthorized: AttachTeamGroupRoleUnauthorizedError,
        NotFound: AttachTeamGroupRoleNotFoundError,
        InternalServerError: AttachTeamGroupRoleInternalServerError,
        BadGateway: AttachTeamGroupRoleBadGatewayError,
        GatewayTimeout: AttachTeamGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamGroupUserError: {
        BadRequest: AttachTeamGroupUserBadRequestError,
        Unauthorized: AttachTeamGroupUserUnauthorizedError,
        NotFound: AttachTeamGroupUserNotFoundError,
        InternalServerError: AttachTeamGroupUserInternalServerError,
        BadGateway: AttachTeamGroupUserBadGatewayError,
        GatewayTimeout: AttachTeamGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamRoleError: {
        BadRequest: AttachTeamRoleBadRequestError,
        Unauthorized: AttachTeamRoleUnauthorizedError,
        NotFound: AttachTeamRoleNotFoundError,
        Conflict: AttachTeamRoleConflictError,
        InternalServerError: AttachTeamRoleInternalServerError,
        BadGateway: AttachTeamRoleBadGatewayError,
        GatewayTimeout: AttachTeamRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamUserError: {
        BadRequest: AttachTeamUserBadRequestError,
        Unauthorized: AttachTeamUserUnauthorizedError,
        NotFound: AttachTeamUserNotFoundError,
        InternalServerError: AttachTeamUserInternalServerError,
        BadGateway: AttachTeamUserBadGatewayError,
        GatewayTimeout: AttachTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachTeamUserRoleError: {
        BadRequest: AttachTeamUserRoleBadRequestError,
        Unauthorized: AttachTeamUserRoleUnauthorizedError,
        NotFound: AttachTeamUserRoleNotFoundError,
        InternalServerError: AttachTeamUserRoleInternalServerError,
        BadGateway: AttachTeamUserRoleBadGatewayError,
        GatewayTimeout: AttachTeamUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    AttachUserRoleError: {
        BadRequest: AttachUserRoleBadRequestError,
        Unauthorized: AttachUserRoleUnauthorizedError,
        NotFound: AttachUserRoleNotFoundError,
        InternalServerError: AttachUserRoleInternalServerError,
        BadGateway: AttachUserRoleBadGatewayError,
        GatewayTimeout: AttachUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ChangePasswordError: {
        BadRequest: ChangePasswordBadRequestError,
        InvalidPasswordSecret: ChangePasswordInvalidPasswordSecretError,
        ExpiredPasswordSecret: ChangePasswordExpiredPasswordSecretError,
        InternalServerError: ChangePasswordInternalServerError,
        BadGateway: ChangePasswordBadGatewayError,
        GatewayTimeout: ChangePasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateAccountError: {
        BadRequest: CreateAccountBadRequestError,
        Conflict: CreateAccountConflictError,
        InternalServerError: CreateAccountInternalServerError,
        BadGateway: CreateAccountBadGatewayError,
        GatewayTimeout: CreateAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateGroupError: {
        BadRequest: CreateGroupBadRequestError,
        Unauthorized: CreateGroupUnauthorizedError,
        Conflict: CreateGroupConflictError,
        InternalServerError: CreateGroupInternalServerError,
        BadGateway: CreateGroupBadGatewayError,
        GatewayTimeout: CreateGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateGroupSCIMError: {
        BadRequest: CreateGroupSCIMBadRequestError,
        Unauthorized: CreateGroupSCIMUnauthorizedError,
        Conflict: CreateGroupSCIMConflictError,
        InternalServerError: CreateGroupSCIMInternalServerError,
        BadGateway: CreateGroupSCIMBadGatewayError,
        GatewayTimeout: CreateGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreatePolicyError: {
        BadRequest: CreatePolicyBadRequestError,
        Unauthorized: CreatePolicyUnauthorizedError,
        Conflict: CreatePolicyConflictError,
        InternalServerError: CreatePolicyInternalServerError,
        BadGateway: CreatePolicyBadGatewayError,
        GatewayTimeout: CreatePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateProviderError: {
        BadRequest: CreateProviderBadRequestError,
        Unauthorized: CreateProviderUnauthorizedError,
        Conflict: CreateProviderConflictError,
        InternalServerError: CreateProviderInternalServerError,
        BadGateway: CreateProviderBadGatewayError,
        GatewayTimeout: CreateProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateRoleError: {
        BadRequest: CreateRoleBadRequestError,
        Unauthorized: CreateRoleUnauthorizedError,
        Conflict: CreateRoleConflictError,
        InternalServerError: CreateRoleInternalServerError,
        BadGateway: CreateRoleBadGatewayError,
        GatewayTimeout: CreateRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTeamError: {
        BadRequest: CreateTeamBadRequestError,
        Unauthorized: CreateTeamUnauthorizedError,
        Conflict: CreateTeamConflictError,
        InternalServerError: CreateTeamInternalServerError,
        BadGateway: CreateTeamBadGatewayError,
        GatewayTimeout: CreateTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTokenError: {
        BadRequest: CreateTokenBadRequestError,
        BadCredentials: CreateTokenBadCredentialsError,
        PasswordRevoked: CreateTokenPasswordRevokedError,
        IdentityDisabled: CreateTokenIdentityDisabledError,
        WrongAuth: CreateTokenWrongAuthError,
        NotFound: CreateTokenNotFoundError,
        Conflict: CreateTokenConflictError,
        InternalServerError: CreateTokenInternalServerError,
        BadGateway: CreateTokenBadGatewayError,
        GatewayTimeout: CreateTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateUserError: {
        BadRequest: CreateUserBadRequestError,
        Unauthorized: CreateUserUnauthorizedError,
        Forbidden: CreateUserForbiddenError,
        Conflict: CreateUserConflictError,
        InternalServerError: CreateUserInternalServerError,
        BadGateway: CreateUserBadGatewayError,
        GatewayTimeout: CreateUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateUserSCIMError: {
        BadRequest: CreateUserSCIMBadRequestError,
        Unauthorized: CreateUserSCIMUnauthorizedError,
        Conflict: CreateUserSCIMConflictError,
        InternalServerError: CreateUserSCIMInternalServerError,
        BadGateway: CreateUserSCIMBadGatewayError,
        GatewayTimeout: CreateUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateUserTokenError: {
        BadRequest: CreateUserTokenBadRequestError,
        Unauthorized: CreateUserTokenUnauthorizedError,
        IdentityDisabled: CreateUserTokenIdentityDisabledError,
        Conflict: CreateUserTokenConflictError,
        InternalServerError: CreateUserTokenInternalServerError,
        BadGateway: CreateUserTokenBadGatewayError,
        GatewayTimeout: CreateUserTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteAccountError: {
        BadRequest: DeleteAccountBadRequestError,
        Unauthorized: DeleteAccountUnauthorizedError,
        InternalServerError: DeleteAccountInternalServerError,
        BadGateway: DeleteAccountBadGatewayError,
        GatewayTimeout: DeleteAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteGroupError: {
        BadRequest: DeleteGroupBadRequestError,
        Unauthorized: DeleteGroupUnauthorizedError,
        NotFound: DeleteGroupNotFoundError,
        InternalServerError: DeleteGroupInternalServerError,
        BadGateway: DeleteGroupBadGatewayError,
        GatewayTimeout: DeleteGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteGroupSCIMError: {
        BadRequest: DeleteGroupSCIMBadRequestError,
        Unauthorized: DeleteGroupSCIMUnauthorizedError,
        NotFound: DeleteGroupSCIMNotFoundError,
        InternalServerError: DeleteGroupSCIMInternalServerError,
        BadGateway: DeleteGroupSCIMBadGatewayError,
        GatewayTimeout: DeleteGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeletePolicyError: {
        BadRequest: DeletePolicyBadRequestError,
        Unauthorized: DeletePolicyUnauthorizedError,
        NotFound: DeletePolicyNotFoundError,
        InternalServerError: DeletePolicyInternalServerError,
        BadGateway: DeletePolicyBadGatewayError,
        GatewayTimeout: DeletePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteProviderError: {
        BadRequest: DeleteProviderBadRequestError,
        Unauthorized: DeleteProviderUnauthorizedError,
        NotFound: DeleteProviderNotFoundError,
        InternalServerError: DeleteProviderInternalServerError,
        BadGateway: DeleteProviderBadGatewayError,
        GatewayTimeout: DeleteProviderGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteRoleError: {
        BadRequest: DeleteRoleBadRequestError,
        Unauthorized: DeleteRoleUnauthorizedError,
        NotFound: DeleteRoleNotFoundError,
        InternalServerError: DeleteRoleInternalServerError,
        BadGateway: DeleteRoleBadGatewayError,
        GatewayTimeout: DeleteRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTeamError: {
        BadRequest: DeleteTeamBadRequestError,
        Unauthorized: DeleteTeamUnauthorizedError,
        Forbidden: DeleteTeamForbiddenError,
        NotFound: DeleteTeamNotFoundError,
        InternalServerError: DeleteTeamInternalServerError,
        BadGateway: DeleteTeamBadGatewayError,
        GatewayTimeout: DeleteTeamGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteUserError: {
        BadRequest: DeleteUserBadRequestError,
        Unauthorized: DeleteUserUnauthorizedError,
        ForbiddenHasUser: DeleteUserForbiddenHasUserError,
        ForbiddenHasRole: DeleteUserForbiddenHasRoleError,
        ForbiddenHasGroup: DeleteUserForbiddenHasGroupError,
        NotFound: DeleteUserNotFoundError,
        InternalServerError: DeleteUserInternalServerError,
        BadGateway: DeleteUserBadGatewayError,
        GatewayTimeout: DeleteUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteUserSCIMError: {
        BadRequest: DeleteUserSCIMBadRequestError,
        Unauthorized: DeleteUserSCIMUnauthorizedError,
        NotFound: DeleteUserSCIMNotFoundError,
        InternalServerError: DeleteUserSCIMInternalServerError,
        BadGateway: DeleteUserSCIMBadGatewayError,
        GatewayTimeout: DeleteUserSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachGroupRoleError: {
        BadRequest: DetachGroupRoleBadRequestError,
        Unauthorized: DetachGroupRoleUnauthorizedError,
        NotFound: DetachGroupRoleNotFoundError,
        InternalServerError: DetachGroupRoleInternalServerError,
        BadGateway: DetachGroupRoleBadGatewayError,
        GatewayTimeout: DetachGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachGroupUserError: {
        BadRequest: DetachGroupUserBadRequestError,
        Unauthorized: DetachGroupUserUnauthorizedError,
        NotFound: DetachGroupUserNotFoundError,
        InternalServerError: DetachGroupUserInternalServerError,
        BadGateway: DetachGroupUserBadGatewayError,
        GatewayTimeout: DetachGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachRolePolicyError: {
        BadRequest: DetachRolePolicyBadRequestError,
        Unauthorized: DetachRolePolicyUnauthorizedError,
        NotFound: DetachRolePolicyNotFoundError,
        InternalServerError: DetachRolePolicyInternalServerError,
        BadGateway: DetachRolePolicyBadGatewayError,
        GatewayTimeout: DetachRolePolicyGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamGroupError: {
        BadRequest: DetachTeamGroupBadRequestError,
        Unauthorized: DetachTeamGroupUnauthorizedError,
        NotFound: DetachTeamGroupNotFoundError,
        InternalServerError: DetachTeamGroupInternalServerError,
        BadGateway: DetachTeamGroupBadGatewayError,
        GatewayTimeout: DetachTeamGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamGroupRoleError: {
        BadRequest: DetachTeamGroupRoleBadRequestError,
        Unauthorized: DetachTeamGroupRoleUnauthorizedError,
        NotFound: DetachTeamGroupRoleNotFoundError,
        InternalServerError: DetachTeamGroupRoleInternalServerError,
        BadGateway: DetachTeamGroupRoleBadGatewayError,
        GatewayTimeout: DetachTeamGroupRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamGroupUserError: {
        BadRequest: DetachTeamGroupUserBadRequestError,
        Unauthorized: DetachTeamGroupUserUnauthorizedError,
        NotFound: DetachTeamGroupUserNotFoundError,
        InternalServerError: DetachTeamGroupUserInternalServerError,
        BadGateway: DetachTeamGroupUserBadGatewayError,
        GatewayTimeout: DetachTeamGroupUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamRoleError: {
        BadRequest: DetachTeamRoleBadRequestError,
        Unauthorized: DetachTeamRoleUnauthorizedError,
        NotFound: DetachTeamRoleNotFoundError,
        InternalServerError: DetachTeamRoleInternalServerError,
        BadGateway: DetachTeamRoleBadGatewayError,
        GatewayTimeout: DetachTeamRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamUserError: {
        BadRequest: DetachTeamUserBadRequestError,
        Unauthorized: DetachTeamUserUnauthorizedError,
        NotFound: DetachTeamUserNotFoundError,
        InternalServerError: DetachTeamUserInternalServerError,
        BadGateway: DetachTeamUserBadGatewayError,
        GatewayTimeout: DetachTeamUserGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachTeamUserRoleError: {
        BadRequest: DetachTeamUserRoleBadRequestError,
        Unauthorized: DetachTeamUserRoleUnauthorizedError,
        NotFound: DetachTeamUserRoleNotFoundError,
        InternalServerError: DetachTeamUserRoleInternalServerError,
        BadGateway: DetachTeamUserRoleBadGatewayError,
        GatewayTimeout: DetachTeamUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DetachUserRoleError: {
        BadRequest: DetachUserRoleBadRequestError,
        Unauthorized: DetachUserRoleUnauthorizedError,
        NotFound: DetachUserRoleNotFoundError,
        InternalServerError: DetachUserRoleInternalServerError,
        BadGateway: DetachUserRoleBadGatewayError,
        GatewayTimeout: DetachUserRoleGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ForgotPasswordError: {
        BadRequest: ForgotPasswordBadRequestError,
        InternalServerError: ForgotPasswordInternalServerError,
        BadGateway: ForgotPasswordBadGatewayError,
        GatewayTimeout: ForgotPasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetAccountError: {
        BadRequest: GetAccountBadRequestError,
        Unauthorized: GetAccountUnauthorizedError,
        InternalServerError: GetAccountInternalServerError,
        BadGateway: GetAccountBadGatewayError,
        GatewayTimeout: GetAccountGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetGroupError: {
        BadRequest: GetGroupBadRequestError,
        Unauthorized: GetGroupUnauthorizedError,
        NotFound: GetGroupNotFoundError,
        InternalServerError: GetGroupInternalServerError,
        BadGateway: GetGroupBadGatewayError,
        GatewayTimeout: GetGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetGroupSCIMError: {
        BadRequest: GetGroupSCIMBadRequestError,
        Unauthorized: GetGroupSCIMUnauthorizedError,
        NotFound: GetGroupSCIMNotFoundError,
        InternalServerError: GetGroupSCIMInternalServerError,
        BadGateway: GetGroupSCIMBadGatewayError,
        GatewayTimeout: GetGroupSCIMGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
};
