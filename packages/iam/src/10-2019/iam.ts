import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { RenewTokenInput, RenewTokenOutput } from "./types/RenewToken/RenewToken";
import { RenewTokenResponse } from "./types/RenewToken/RenewTokenResponse";
export * from "./types/RenewToken/RenewToken";
import { ResetPasswordInput, ResetPasswordOutput } from "./types/ResetPassword/ResetPassword";
import { ResetPasswordResponse } from "./types/ResetPassword/ResetPasswordResponse";
export * from "./types/ResetPassword/ResetPassword";
import { RotateKeyInput, RotateKeyOutput } from "./types/RotateKey/RotateKey";
import { RotateKeyResponse } from "./types/RotateKey/RotateKeyResponse";
export * from "./types/RotateKey/RotateKey";
import { RotateUserKeyInput, RotateUserKeyOutput } from "./types/RotateUserKey/RotateUserKey";
import { RotateUserKeyResponse } from "./types/RotateUserKey/RotateUserKeyResponse";
export * from "./types/RotateUserKey/RotateUserKey";
import { SSOSignInInput, SSOSignInOutput } from "./types/SSOSignIn/SSOSignIn";
import { SSOSignInResponse } from "./types/SSOSignIn/SSOSignInResponse";
export * from "./types/SSOSignIn/SSOSignIn";
import { SamlSignOnInput, SamlSignOnOutput } from "./types/SamlSignOn/SamlSignOn";
import { SamlSignOnResponse } from "./types/SamlSignOn/SamlSignOnResponse";
export * from "./types/SamlSignOn/SamlSignOn";
import { UpdateAccountInput, UpdateAccountOutput } from "./types/UpdateAccount/UpdateAccount";
import { UpdateAccountResponse } from "./types/UpdateAccount/UpdateAccountResponse";
export * from "./types/UpdateAccount/UpdateAccount";
import { UpdateGroupInput, UpdateGroupOutput } from "./types/UpdateGroup/UpdateGroup";
import { UpdateGroupResponse } from "./types/UpdateGroup/UpdateGroupResponse";
export * from "./types/UpdateGroup/UpdateGroup";
import { UpdateGroupSCIMInput, UpdateGroupSCIMOutput } from "./types/UpdateGroupSCIM/UpdateGroupSCIM";
import { UpdateGroupSCIMResponse } from "./types/UpdateGroupSCIM/UpdateGroupSCIMResponse";
export * from "./types/UpdateGroupSCIM/UpdateGroupSCIM";
import { UpdateManagedPolicyInput, UpdateManagedPolicyOutput } from "./types/UpdateManagedPolicy/UpdateManagedPolicy";
import { UpdateManagedPolicyResponse } from "./types/UpdateManagedPolicy/UpdateManagedPolicyResponse";
export * from "./types/UpdateManagedPolicy/UpdateManagedPolicy";
import { UpdatePasswordInput, UpdatePasswordOutput } from "./types/UpdatePassword/UpdatePassword";
import { UpdatePasswordResponse } from "./types/UpdatePassword/UpdatePasswordResponse";
export * from "./types/UpdatePassword/UpdatePassword";
import { UpdatePolicyInput, UpdatePolicyOutput } from "./types/UpdatePolicy/UpdatePolicy";
import { UpdatePolicyResponse } from "./types/UpdatePolicy/UpdatePolicyResponse";
export * from "./types/UpdatePolicy/UpdatePolicy";
import { UpdateProviderInput, UpdateProviderOutput } from "./types/UpdateProvider/UpdateProvider";
import { UpdateProviderResponse } from "./types/UpdateProvider/UpdateProviderResponse";
export * from "./types/UpdateProvider/UpdateProvider";
import { UpdateRoleInput, UpdateRoleOutput } from "./types/UpdateRole/UpdateRole";
import { UpdateRoleResponse } from "./types/UpdateRole/UpdateRoleResponse";
export * from "./types/UpdateRole/UpdateRole";
import { UpdateTeamInput, UpdateTeamOutput } from "./types/UpdateTeam/UpdateTeam";
import { UpdateTeamResponse } from "./types/UpdateTeam/UpdateTeamResponse";
export * from "./types/UpdateTeam/UpdateTeam";
import { UpdateTeamGroupInput, UpdateTeamGroupOutput } from "./types/UpdateTeamGroup/UpdateTeamGroup";
import { UpdateTeamGroupResponse } from "./types/UpdateTeamGroup/UpdateTeamGroupResponse";
export * from "./types/UpdateTeamGroup/UpdateTeamGroup";
import { UpdateTeamUserInput, UpdateTeamUserOutput } from "./types/UpdateTeamUser/UpdateTeamUser";
import { UpdateTeamUserResponse } from "./types/UpdateTeamUser/UpdateTeamUserResponse";
export * from "./types/UpdateTeamUser/UpdateTeamUser";
import { UpdateUserInput, UpdateUserOutput } from "./types/UpdateUser/UpdateUser";
import { UpdateUserResponse } from "./types/UpdateUser/UpdateUserResponse";
export * from "./types/UpdateUser/UpdateUser";
import { UpdateUserSCIMInput, UpdateUserSCIMOutput } from "./types/UpdateUserSCIM/UpdateUserSCIM";
import { UpdateUserSCIMResponse } from "./types/UpdateUserSCIM/UpdateUserSCIMResponse";
export * from "./types/UpdateUserSCIM/UpdateUserSCIM";
import { DetachTeamGroupInput, DetachTeamGroupOutput } from "./types/DetachTeamGroup/DetachTeamGroup";
import { DetachTeamGroupResponse } from "./types/DetachTeamGroup/DetachTeamGroupResponse";
export * from "./types/DetachTeamGroup/DetachTeamGroup";
import { DetachTeamGroupRoleInput, DetachTeamGroupRoleOutput } from "./types/DetachTeamGroupRole/DetachTeamGroupRole";
import { DetachTeamGroupRoleResponse } from "./types/DetachTeamGroupRole/DetachTeamGroupRoleResponse";
export * from "./types/DetachTeamGroupRole/DetachTeamGroupRole";
import { DetachTeamGroupUserInput, DetachTeamGroupUserOutput } from "./types/DetachTeamGroupUser/DetachTeamGroupUser";
import { DetachTeamGroupUserResponse } from "./types/DetachTeamGroupUser/DetachTeamGroupUserResponse";
export * from "./types/DetachTeamGroupUser/DetachTeamGroupUser";
import { DetachTeamRoleInput, DetachTeamRoleOutput } from "./types/DetachTeamRole/DetachTeamRole";
import { DetachTeamRoleResponse } from "./types/DetachTeamRole/DetachTeamRoleResponse";
export * from "./types/DetachTeamRole/DetachTeamRole";
import { DetachTeamUserInput, DetachTeamUserOutput } from "./types/DetachTeamUser/DetachTeamUser";
import { DetachTeamUserResponse } from "./types/DetachTeamUser/DetachTeamUserResponse";
export * from "./types/DetachTeamUser/DetachTeamUser";
import { DetachTeamUserRoleInput, DetachTeamUserRoleOutput } from "./types/DetachTeamUserRole/DetachTeamUserRole";
import { DetachTeamUserRoleResponse } from "./types/DetachTeamUserRole/DetachTeamUserRoleResponse";
export * from "./types/DetachTeamUserRole/DetachTeamUserRole";
import { DetachUserRoleInput, DetachUserRoleOutput } from "./types/DetachUserRole/DetachUserRole";
import { DetachUserRoleResponse } from "./types/DetachUserRole/DetachUserRoleResponse";
export * from "./types/DetachUserRole/DetachUserRole";
import { ForgotPasswordInput, ForgotPasswordOutput } from "./types/ForgotPassword/ForgotPassword";
import { ForgotPasswordResponse } from "./types/ForgotPassword/ForgotPasswordResponse";
export * from "./types/ForgotPassword/ForgotPassword";
import { GetAccountInput, GetAccountOutput } from "./types/GetAccount/GetAccount";
import { GetAccountResponse } from "./types/GetAccount/GetAccountResponse";
export * from "./types/GetAccount/GetAccount";
import { GetGroupInput, GetGroupOutput } from "./types/GetGroup/GetGroup";
import { GetGroupResponse } from "./types/GetGroup/GetGroupResponse";
export * from "./types/GetGroup/GetGroup";
import { GetGroupSCIMInput, GetGroupSCIMOutput } from "./types/GetGroupSCIM/GetGroupSCIM";
import { GetGroupSCIMResponse } from "./types/GetGroupSCIM/GetGroupSCIMResponse";
export * from "./types/GetGroupSCIM/GetGroupSCIM";
import { GetPolicyInput, GetPolicyOutput } from "./types/GetPolicy/GetPolicy";
import { GetPolicyResponse } from "./types/GetPolicy/GetPolicyResponse";
export * from "./types/GetPolicy/GetPolicy";
import { GetProviderInput, GetProviderOutput } from "./types/GetProvider/GetProvider";
import { GetProviderResponse } from "./types/GetProvider/GetProviderResponse";
export * from "./types/GetProvider/GetProvider";
import { GetResourceTypesInput, GetResourceTypesOutput } from "./types/GetResourceTypes/GetResourceTypes";
import { GetResourceTypesResponse } from "./types/GetResourceTypes/GetResourceTypesResponse";
export * from "./types/GetResourceTypes/GetResourceTypes";
import { GetRoleInput, GetRoleOutput } from "./types/GetRole/GetRole";
import { GetRoleResponse } from "./types/GetRole/GetRoleResponse";
export * from "./types/GetRole/GetRole";
import { GetSchemasInput, GetSchemasOutput } from "./types/GetSchemas/GetSchemas";
import { GetSchemasResponse } from "./types/GetSchemas/GetSchemasResponse";
export * from "./types/GetSchemas/GetSchemas";
import { GetServiceProviderConfigInput, GetServiceProviderConfigOutput } from "./types/GetServiceProviderConfig/GetServiceProviderConfig";
import { GetServiceProviderConfigResponse } from "./types/GetServiceProviderConfig/GetServiceProviderConfigResponse";
export * from "./types/GetServiceProviderConfig/GetServiceProviderConfig";
import { GetSigninConfigurationInput, GetSigninConfigurationOutput } from "./types/GetSigninConfiguration/GetSigninConfiguration";
import { GetSigninConfigurationResponse } from "./types/GetSigninConfiguration/GetSigninConfigurationResponse";
export * from "./types/GetSigninConfiguration/GetSigninConfiguration";
import { GetTeamInput, GetTeamOutput } from "./types/GetTeam/GetTeam";
import { GetTeamResponse } from "./types/GetTeam/GetTeamResponse";
export * from "./types/GetTeam/GetTeam";
import { GetTeamGroupInput, GetTeamGroupOutput } from "./types/GetTeamGroup/GetTeamGroup";
import { GetTeamGroupResponse } from "./types/GetTeamGroup/GetTeamGroupResponse";
export * from "./types/GetTeamGroup/GetTeamGroup";
import { GetTeamUserInput, GetTeamUserOutput } from "./types/GetTeamUser/GetTeamUser";
import { GetTeamUserResponse } from "./types/GetTeamUser/GetTeamUserResponse";
export * from "./types/GetTeamUser/GetTeamUser";
import { GetUserInput, GetUserOutput } from "./types/GetUser/GetUser";
import { GetUserResponse } from "./types/GetUser/GetUserResponse";
export * from "./types/GetUser/GetUser";
import { GetUserSCIMInput, GetUserSCIMOutput } from "./types/GetUserSCIM/GetUserSCIM";
import { GetUserSCIMResponse } from "./types/GetUserSCIM/GetUserSCIMResponse";
export * from "./types/GetUserSCIM/GetUserSCIM";
import { InviteTeamUserInput, InviteTeamUserOutput } from "./types/InviteTeamUser/InviteTeamUser";
import { InviteTeamUserResponse } from "./types/InviteTeamUser/InviteTeamUserResponse";
export * from "./types/InviteTeamUser/InviteTeamUser";
import { InviteUserInput, InviteUserOutput } from "./types/InviteUser/InviteUser";
import { InviteUserResponse } from "./types/InviteUser/InviteUserResponse";
export * from "./types/InviteUser/InviteUser";
import { ListGroupRolesInput, ListGroupRolesOutput } from "./types/ListGroupRoles/ListGroupRoles";
import { ListGroupRolesResponse } from "./types/ListGroupRoles/ListGroupRolesResponse";
export * from "./types/ListGroupRoles/ListGroupRoles";
import { ListGroupTeamsInput, ListGroupTeamsOutput } from "./types/ListGroupTeams/ListGroupTeams";
import { ListGroupTeamsResponse } from "./types/ListGroupTeams/ListGroupTeamsResponse";
export * from "./types/ListGroupTeams/ListGroupTeams";
import { ListGroupUsersInput, ListGroupUsersOutput } from "./types/ListGroupUsers/ListGroupUsers";
import { ListGroupUsersResponse } from "./types/ListGroupUsers/ListGroupUsersResponse";
export * from "./types/ListGroupUsers/ListGroupUsers";
import { ListGroupsInput, ListGroupsOutput } from "./types/ListGroups/ListGroups";
import { ListGroupsResponse } from "./types/ListGroups/ListGroupsResponse";
export * from "./types/ListGroups/ListGroups";
import { ListGroupsSCIMInput, ListGroupsSCIMOutput } from "./types/ListGroupsSCIM/ListGroupsSCIM";
import { ListGroupsSCIMResponse } from "./types/ListGroupsSCIM/ListGroupsSCIMResponse";
export * from "./types/ListGroupsSCIM/ListGroupsSCIM";
import { ListPoliciesInput, ListPoliciesOutput } from "./types/ListPolicies/ListPolicies";
import { ListPoliciesResponse } from "./types/ListPolicies/ListPoliciesResponse";
export * from "./types/ListPolicies/ListPolicies";
import { ListProvidersInput, ListProvidersOutput } from "./types/ListProviders/ListProviders";
import { ListProvidersResponse } from "./types/ListProviders/ListProvidersResponse";
export * from "./types/ListProviders/ListProviders";
import { ListRolesInput, ListRolesOutput } from "./types/ListRoles/ListRoles";
import { ListRolesResponse } from "./types/ListRoles/ListRolesResponse";
export * from "./types/ListRoles/ListRoles";
import { ListTeamGroupRolesInput, ListTeamGroupRolesOutput } from "./types/ListTeamGroupRoles/ListTeamGroupRoles";
import { ListTeamGroupRolesResponse } from "./types/ListTeamGroupRoles/ListTeamGroupRolesResponse";
export * from "./types/ListTeamGroupRoles/ListTeamGroupRoles";
import { ListTeamGroupUsersInput, ListTeamGroupUsersOutput } from "./types/ListTeamGroupUsers/ListTeamGroupUsers";
import { ListTeamGroupUsersResponse } from "./types/ListTeamGroupUsers/ListTeamGroupUsersResponse";
export * from "./types/ListTeamGroupUsers/ListTeamGroupUsers";
import { ListTeamGroupsInput, ListTeamGroupsOutput } from "./types/ListTeamGroups/ListTeamGroups";
import { ListTeamGroupsResponse } from "./types/ListTeamGroups/ListTeamGroupsResponse";
export * from "./types/ListTeamGroups/ListTeamGroups";
import { ListTeamRolesInput, ListTeamRolesOutput } from "./types/ListTeamRoles/ListTeamRoles";
import { ListTeamRolesResponse } from "./types/ListTeamRoles/ListTeamRolesResponse";
export * from "./types/ListTeamRoles/ListTeamRoles";
import { ListTeamUserGroupsInput, ListTeamUserGroupsOutput } from "./types/ListTeamUserGroups/ListTeamUserGroups";
import { ListTeamUserGroupsResponse } from "./types/ListTeamUserGroups/ListTeamUserGroupsResponse";
export * from "./types/ListTeamUserGroups/ListTeamUserGroups";
import { ListTeamUserRolesInput, ListTeamUserRolesOutput } from "./types/ListTeamUserRoles/ListTeamUserRoles";
import { ListTeamUserRolesResponse } from "./types/ListTeamUserRoles/ListTeamUserRolesResponse";
export * from "./types/ListTeamUserRoles/ListTeamUserRoles";
import { ListTeamUsersInput, ListTeamUsersOutput } from "./types/ListTeamUsers/ListTeamUsers";
import { ListTeamUsersResponse } from "./types/ListTeamUsers/ListTeamUsersResponse";
export * from "./types/ListTeamUsers/ListTeamUsers";
import { ListTeamsInput, ListTeamsOutput } from "./types/ListTeams/ListTeams";
import { ListTeamsResponse } from "./types/ListTeams/ListTeamsResponse";
export * from "./types/ListTeams/ListTeams";
import { ListUserGroupsInput, ListUserGroupsOutput } from "./types/ListUserGroups/ListUserGroups";
import { ListUserGroupsResponse } from "./types/ListUserGroups/ListUserGroupsResponse";
export * from "./types/ListUserGroups/ListUserGroups";
import { ListUserGroupsRolesInput, ListUserGroupsRolesOutput } from "./types/ListUserGroupsRoles/ListUserGroupsRoles";
import { ListUserGroupsRolesResponse } from "./types/ListUserGroupsRoles/ListUserGroupsRolesResponse";
export * from "./types/ListUserGroupsRoles/ListUserGroupsRoles";
import { ListUserGroupsTeamsInput, ListUserGroupsTeamsOutput } from "./types/ListUserGroupsTeams/ListUserGroupsTeams";
import { ListUserGroupsTeamsResponse } from "./types/ListUserGroupsTeams/ListUserGroupsTeamsResponse";
export * from "./types/ListUserGroupsTeams/ListUserGroupsTeams";
import { ListUserRolesInput, ListUserRolesOutput } from "./types/ListUserRoles/ListUserRoles";
import { ListUserRolesResponse } from "./types/ListUserRoles/ListUserRolesResponse";
export * from "./types/ListUserRoles/ListUserRoles";
import { ListUserTeamsInput, ListUserTeamsOutput } from "./types/ListUserTeams/ListUserTeams";
import { ListUserTeamsResponse } from "./types/ListUserTeams/ListUserTeamsResponse";
export * from "./types/ListUserTeams/ListUserTeams";
import { ListUsersInput, ListUsersOutput } from "./types/ListUsers/ListUsers";
import { ListUsersResponse } from "./types/ListUsers/ListUsersResponse";
export * from "./types/ListUsers/ListUsers";
import { ListUsersSCIMInput, ListUsersSCIMOutput } from "./types/ListUsersSCIM/ListUsersSCIM";
import { ListUsersSCIMResponse } from "./types/ListUsersSCIM/ListUsersSCIMResponse";
export * from "./types/ListUsersSCIM/ListUsersSCIM";
import { PatchGroupSCIMInput, PatchGroupSCIMOutput } from "./types/PatchGroupSCIM/PatchGroupSCIM";
import { PatchGroupSCIMResponse } from "./types/PatchGroupSCIM/PatchGroupSCIMResponse";
export * from "./types/PatchGroupSCIM/PatchGroupSCIM";
import { PatchUserSCIMInput, PatchUserSCIMOutput } from "./types/PatchUserSCIM/PatchUserSCIM";
import { PatchUserSCIMResponse } from "./types/PatchUserSCIM/PatchUserSCIMResponse";
export * from "./types/PatchUserSCIM/PatchUserSCIM";
import { AcceptInvitationInput, AcceptInvitationOutput } from "./types/AcceptInvitation/AcceptInvitation";
import { AcceptInvitationResponse } from "./types/AcceptInvitation/AcceptInvitationResponse";
export * from "./types/AcceptInvitation/AcceptInvitation";
import { AcceptUserInvitationInput, AcceptUserInvitationOutput } from "./types/AcceptUserInvitation/AcceptUserInvitation";
import { AcceptUserInvitationResponse } from "./types/AcceptUserInvitation/AcceptUserInvitationResponse";
export * from "./types/AcceptUserInvitation/AcceptUserInvitation";
import { AttachGroupRoleInput, AttachGroupRoleOutput } from "./types/AttachGroupRole/AttachGroupRole";
import { AttachGroupRoleResponse } from "./types/AttachGroupRole/AttachGroupRoleResponse";
export * from "./types/AttachGroupRole/AttachGroupRole";
import { AttachGroupUserInput, AttachGroupUserOutput } from "./types/AttachGroupUser/AttachGroupUser";
import { AttachGroupUserResponse } from "./types/AttachGroupUser/AttachGroupUserResponse";
export * from "./types/AttachGroupUser/AttachGroupUser";
import { AttachRolePolicyInput, AttachRolePolicyOutput } from "./types/AttachRolePolicy/AttachRolePolicy";
import { AttachRolePolicyResponse } from "./types/AttachRolePolicy/AttachRolePolicyResponse";
export * from "./types/AttachRolePolicy/AttachRolePolicy";
import { AttachTeamGroupInput, AttachTeamGroupOutput } from "./types/AttachTeamGroup/AttachTeamGroup";
import { AttachTeamGroupResponse } from "./types/AttachTeamGroup/AttachTeamGroupResponse";
export * from "./types/AttachTeamGroup/AttachTeamGroup";
import { AttachTeamGroupRoleInput, AttachTeamGroupRoleOutput } from "./types/AttachTeamGroupRole/AttachTeamGroupRole";
import { AttachTeamGroupRoleResponse } from "./types/AttachTeamGroupRole/AttachTeamGroupRoleResponse";
export * from "./types/AttachTeamGroupRole/AttachTeamGroupRole";
import { AttachTeamGroupUserInput, AttachTeamGroupUserOutput } from "./types/AttachTeamGroupUser/AttachTeamGroupUser";
import { AttachTeamGroupUserResponse } from "./types/AttachTeamGroupUser/AttachTeamGroupUserResponse";
export * from "./types/AttachTeamGroupUser/AttachTeamGroupUser";
import { AttachTeamRoleInput, AttachTeamRoleOutput } from "./types/AttachTeamRole/AttachTeamRole";
import { AttachTeamRoleResponse } from "./types/AttachTeamRole/AttachTeamRoleResponse";
export * from "./types/AttachTeamRole/AttachTeamRole";
import { AttachTeamUserInput, AttachTeamUserOutput } from "./types/AttachTeamUser/AttachTeamUser";
import { AttachTeamUserResponse } from "./types/AttachTeamUser/AttachTeamUserResponse";
export * from "./types/AttachTeamUser/AttachTeamUser";
import { AttachTeamUserRoleInput, AttachTeamUserRoleOutput } from "./types/AttachTeamUserRole/AttachTeamUserRole";
import { AttachTeamUserRoleResponse } from "./types/AttachTeamUserRole/AttachTeamUserRoleResponse";
export * from "./types/AttachTeamUserRole/AttachTeamUserRole";
import { AttachUserRoleInput, AttachUserRoleOutput } from "./types/AttachUserRole/AttachUserRole";
import { AttachUserRoleResponse } from "./types/AttachUserRole/AttachUserRoleResponse";
export * from "./types/AttachUserRole/AttachUserRole";
import { ChangePasswordInput, ChangePasswordOutput } from "./types/ChangePassword/ChangePassword";
import { ChangePasswordResponse } from "./types/ChangePassword/ChangePasswordResponse";
export * from "./types/ChangePassword/ChangePassword";
import { CreateAccountInput, CreateAccountOutput } from "./types/CreateAccount/CreateAccount";
import { CreateAccountResponse } from "./types/CreateAccount/CreateAccountResponse";
export * from "./types/CreateAccount/CreateAccount";
import { CreateGroupInput, CreateGroupOutput } from "./types/CreateGroup/CreateGroup";
import { CreateGroupResponse } from "./types/CreateGroup/CreateGroupResponse";
export * from "./types/CreateGroup/CreateGroup";
import { CreateGroupSCIMInput, CreateGroupSCIMOutput } from "./types/CreateGroupSCIM/CreateGroupSCIM";
import { CreateGroupSCIMResponse } from "./types/CreateGroupSCIM/CreateGroupSCIMResponse";
export * from "./types/CreateGroupSCIM/CreateGroupSCIM";
import { CreatePolicyInput, CreatePolicyOutput } from "./types/CreatePolicy/CreatePolicy";
import { CreatePolicyResponse } from "./types/CreatePolicy/CreatePolicyResponse";
export * from "./types/CreatePolicy/CreatePolicy";
import { CreateProviderInput, CreateProviderOutput } from "./types/CreateProvider/CreateProvider";
import { CreateProviderResponse } from "./types/CreateProvider/CreateProviderResponse";
export * from "./types/CreateProvider/CreateProvider";
import { CreateRoleInput, CreateRoleOutput } from "./types/CreateRole/CreateRole";
import { CreateRoleResponse } from "./types/CreateRole/CreateRoleResponse";
export * from "./types/CreateRole/CreateRole";
import { CreateTeamInput, CreateTeamOutput } from "./types/CreateTeam/CreateTeam";
import { CreateTeamResponse } from "./types/CreateTeam/CreateTeamResponse";
export * from "./types/CreateTeam/CreateTeam";
import { CreateTokenInput, CreateTokenOutput } from "./types/CreateToken/CreateToken";
import { CreateTokenResponse } from "./types/CreateToken/CreateTokenResponse";
export * from "./types/CreateToken/CreateToken";
import { CreateUserInput, CreateUserOutput } from "./types/CreateUser/CreateUser";
import { CreateUserResponse } from "./types/CreateUser/CreateUserResponse";
export * from "./types/CreateUser/CreateUser";
import { CreateUserSCIMInput, CreateUserSCIMOutput } from "./types/CreateUserSCIM/CreateUserSCIM";
import { CreateUserSCIMResponse } from "./types/CreateUserSCIM/CreateUserSCIMResponse";
export * from "./types/CreateUserSCIM/CreateUserSCIM";
import { CreateUserTokenInput, CreateUserTokenOutput } from "./types/CreateUserToken/CreateUserToken";
import { CreateUserTokenResponse } from "./types/CreateUserToken/CreateUserTokenResponse";
export * from "./types/CreateUserToken/CreateUserToken";
import { DeleteAccountInput, DeleteAccountOutput } from "./types/DeleteAccount/DeleteAccount";
import { DeleteAccountResponse } from "./types/DeleteAccount/DeleteAccountResponse";
export * from "./types/DeleteAccount/DeleteAccount";
import { DeleteGroupInput, DeleteGroupOutput } from "./types/DeleteGroup/DeleteGroup";
import { DeleteGroupResponse } from "./types/DeleteGroup/DeleteGroupResponse";
export * from "./types/DeleteGroup/DeleteGroup";
import { DeleteGroupSCIMInput, DeleteGroupSCIMOutput } from "./types/DeleteGroupSCIM/DeleteGroupSCIM";
import { DeleteGroupSCIMResponse } from "./types/DeleteGroupSCIM/DeleteGroupSCIMResponse";
export * from "./types/DeleteGroupSCIM/DeleteGroupSCIM";
import { DeletePolicyInput, DeletePolicyOutput } from "./types/DeletePolicy/DeletePolicy";
import { DeletePolicyResponse } from "./types/DeletePolicy/DeletePolicyResponse";
export * from "./types/DeletePolicy/DeletePolicy";
import { DeleteProviderInput, DeleteProviderOutput } from "./types/DeleteProvider/DeleteProvider";
import { DeleteProviderResponse } from "./types/DeleteProvider/DeleteProviderResponse";
export * from "./types/DeleteProvider/DeleteProvider";
import { DeleteRoleInput, DeleteRoleOutput } from "./types/DeleteRole/DeleteRole";
import { DeleteRoleResponse } from "./types/DeleteRole/DeleteRoleResponse";
export * from "./types/DeleteRole/DeleteRole";
import { DeleteTeamInput, DeleteTeamOutput } from "./types/DeleteTeam/DeleteTeam";
import { DeleteTeamResponse } from "./types/DeleteTeam/DeleteTeamResponse";
export * from "./types/DeleteTeam/DeleteTeam";
import { DeleteUserInput, DeleteUserOutput } from "./types/DeleteUser/DeleteUser";
import { DeleteUserResponse } from "./types/DeleteUser/DeleteUserResponse";
export * from "./types/DeleteUser/DeleteUser";
import { DeleteUserSCIMInput, DeleteUserSCIMOutput } from "./types/DeleteUserSCIM/DeleteUserSCIM";
import { DeleteUserSCIMResponse } from "./types/DeleteUserSCIM/DeleteUserSCIMResponse";
export * from "./types/DeleteUserSCIM/DeleteUserSCIM";
import { DetachGroupRoleInput, DetachGroupRoleOutput } from "./types/DetachGroupRole/DetachGroupRole";
import { DetachGroupRoleResponse } from "./types/DetachGroupRole/DetachGroupRoleResponse";
export * from "./types/DetachGroupRole/DetachGroupRole";
import { DetachGroupUserInput, DetachGroupUserOutput } from "./types/DetachGroupUser/DetachGroupUser";
import { DetachGroupUserResponse } from "./types/DetachGroupUser/DetachGroupUserResponse";
export * from "./types/DetachGroupUser/DetachGroupUser";
import { DetachRolePolicyInput, DetachRolePolicyOutput } from "./types/DetachRolePolicy/DetachRolePolicy";
import { DetachRolePolicyResponse } from "./types/DetachRolePolicy/DetachRolePolicyResponse";
export * from "./types/DetachRolePolicy/DetachRolePolicy";

const endpoints = {
    "ca-central-1": "https://iam.ca-central-1.fromsmash.co",
    "eu-central-1": "https://iam.eu-central-1.fromsmash.co",
    "eu-west-1": "https://iam.eu-west-1.fromsmash.co",
    "eu-west-2": "https://iam.eu-west-2.fromsmash.co",
    "eu-west-3": "https://iam.eu-west-3.fromsmash.co",
    "us-east-1": "https://iam.us-east-1.fromsmash.co",
    "us-east-2": "https://iam.us-east-2.fromsmash.co",
    "us-west-1": "https://iam.us-west-1.fromsmash.co",
    "us-west-2": "https://iam.us-west-2.fromsmash.co",
};

config.setHosts("iam", endpoints);

export class Iam extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "iam", ...params, type: "regional", userAgent: "@smash-sdk/iam@0.0.9-alpha.4" });
    }

    renewToken(params: RenewTokenInput): Promise<RenewTokenOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/token",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        refreshToken: params["refreshToken"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<RenewTokenResponse>(request);
                const parsedResponse = this.parseResponse<RenewTokenResponse, RenewTokenOutput>(response, this.errors.RenewTokenError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    resetPassword(params: ResetPasswordInput): Promise<ResetPasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/reset",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        password: params["password"],
                        account: params["account"],
                        secret: params["secret"],
                        id: params["id"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ResetPasswordResponse>(request);
                const parsedResponse = this.parseResponse<ResetPasswordResponse, ResetPasswordOutput>(response, this.errors.ResetPasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    rotateKey(): Promise<RotateKeyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/key/rotate",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<RotateKeyResponse>(request);
                const parsedResponse = this.parseResponse<RotateKeyResponse, RotateKeyOutput>(response, this.errors.RotateKeyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    rotateUserKey(params: RotateUserKeyInput): Promise<RotateUserKeyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/user/:userId/key/rotate",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<RotateUserKeyResponse>(request);
                const parsedResponse = this.parseResponse<RotateUserKeyResponse, RotateUserKeyOutput>(response, this.errors.RotateUserKeyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    sSOSignIn(params: SSOSignInInput): Promise<SSOSignInOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/sso/signin",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<SSOSignInResponse>(request);
                const parsedResponse = this.parseResponse<SSOSignInResponse, SSOSignInOutput>(response, this.errors.SSOSignInError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    samlSignOn(params: SamlSignOnInput): Promise<SamlSignOnOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/saml/signon",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        SAMLResponse: params["SAMLResponse"],
                        RelayState: params["RelayState"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<SamlSignOnResponse>(request);
                const parsedResponse = this.parseResponse<SamlSignOnResponse, SamlSignOnOutput>(response, this.errors.SamlSignOnError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateAccount(params: UpdateAccountInput = {}): Promise<UpdateAccountOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/account",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                        password: params["password"],
                        firstName: params["firstName"],
                        lastName: params["lastName"],
                        language: params["language"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateAccountResponse>(request);
                const parsedResponse = this.parseResponse<UpdateAccountResponse, UpdateAccountOutput>(response, this.errors.UpdateAccountError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateGroup(params: UpdateGroupInput): Promise<UpdateGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/group/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateGroupResponse>(request);
                const parsedResponse = this.parseResponse<UpdateGroupResponse, UpdateGroupOutput>(response, this.errors.UpdateGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateGroupSCIM(params: UpdateGroupSCIMInput): Promise<UpdateGroupSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/Groups/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        schemas: params["schemas"],
                        displayName: params["displayName"],
                        groupType: params["groupType"],
                        members: params["members"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateGroupSCIMResponse>(request);
                const parsedResponse = this.parseResponse<UpdateGroupSCIMResponse, UpdateGroupSCIMOutput>(response, this.errors.UpdateGroupSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateManagedPolicy(params: UpdateManagedPolicyInput): Promise<UpdateManagedPolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/managedPolicy/:policyId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        policyId: params["policyId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        description: params["description"],
                        statement: params["statement"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateManagedPolicyResponse>(request);
                const parsedResponse = this.parseResponse<UpdateManagedPolicyResponse, UpdateManagedPolicyOutput>(response, this.errors.UpdateManagedPolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updatePassword(params: UpdatePasswordInput): Promise<UpdatePasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/update",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        currentPassword: params["currentPassword"],
                        newPassword: params["newPassword"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdatePasswordResponse>(request);
                const parsedResponse = this.parseResponse<UpdatePasswordResponse, UpdatePasswordOutput>(response, this.errors.UpdatePasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updatePolicy(params: UpdatePolicyInput): Promise<UpdatePolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/policy/:policyId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        policyId: params["policyId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        description: params["description"],
                        statement: params["statement"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdatePolicyResponse>(request);
                const parsedResponse = this.parseResponse<UpdatePolicyResponse, UpdatePolicyOutput>(response, this.errors.UpdatePolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateProvider(params: UpdateProviderInput): Promise<UpdateProviderOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/provider/:name",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        name: params["name"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        idpUrl: params["idpUrl"],
                        certificate: params["certificate"],
                        status: params["status"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateProviderResponse>(request);
                const parsedResponse = this.parseResponse<UpdateProviderResponse, UpdateProviderOutput>(response, this.errors.UpdateProviderError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateRole(params: UpdateRoleInput): Promise<UpdateRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/role/:roleId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        description: params["description"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateRoleResponse>(request);
                const parsedResponse = this.parseResponse<UpdateRoleResponse, UpdateRoleOutput>(response, this.errors.UpdateRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateTeam(params: UpdateTeamInput): Promise<UpdateTeamOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                        description: params["description"],
                        config: params["config"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTeamResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTeamResponse, UpdateTeamOutput>(response, this.errors.UpdateTeamError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateTeamGroup(params: UpdateTeamGroupInput): Promise<UpdateTeamGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTeamGroupResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTeamGroupResponse, UpdateTeamGroupOutput>(response, this.errors.UpdateTeamGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateTeamUser(params: UpdateTeamUserInput): Promise<UpdateTeamUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/user/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                        lastName: params["lastName"],
                        firstName: params["firstName"],
                        language: params["language"],
                        status: params["status"],
                        authenticationMode: params["authenticationMode"],
                        label: params["label"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTeamUserResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTeamUserResponse, UpdateTeamUserOutput>(response, this.errors.UpdateTeamUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateUser(params: UpdateUserInput): Promise<UpdateUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/user/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                        lastName: params["lastName"],
                        firstName: params["firstName"],
                        language: params["language"],
                        status: params["status"],
                        authenticationMode: params["authenticationMode"],
                        label: params["label"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateUserResponse>(request);
                const parsedResponse = this.parseResponse<UpdateUserResponse, UpdateUserOutput>(response, this.errors.UpdateUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    updateUserSCIM(params: UpdateUserSCIMInput): Promise<UpdateUserSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/Users/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        schemas: params["schemas"],
                        userName: params["userName"],
                        name: params["name"],
                        emails: params["emails"],
                        displayName: params["displayName"],
                        locale: params["locale"],
                        active: params["active"],
                        groups: params["groups"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateUserSCIMResponse>(request);
                const parsedResponse = this.parseResponse<UpdateUserSCIMResponse, UpdateUserSCIMOutput>(response, this.errors.UpdateUserSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachTeamGroup(params: DetachTeamGroupInput): Promise<DetachTeamGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachTeamGroupResponse>(request);
                const parsedResponse = this.parseResponse<DetachTeamGroupResponse, DetachTeamGroupOutput>(response, this.errors.DetachTeamGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachTeamGroupRole(params: DetachTeamGroupRoleInput): Promise<DetachTeamGroupRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId/role/:roleId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachTeamGroupRoleResponse>(request);
                const parsedResponse = this.parseResponse<DetachTeamGroupRoleResponse, DetachTeamGroupRoleOutput>(response, this.errors.DetachTeamGroupRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachTeamGroupUser(params: DetachTeamGroupUserInput): Promise<DetachTeamGroupUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId/user/:userId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachTeamGroupUserResponse>(request);
                const parsedResponse = this.parseResponse<DetachTeamGroupUserResponse, DetachTeamGroupUserOutput>(response, this.errors.DetachTeamGroupUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachTeamRole(params: DetachTeamRoleInput): Promise<DetachTeamRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/role/:roleId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachTeamRoleResponse>(request);
                const parsedResponse = this.parseResponse<DetachTeamRoleResponse, DetachTeamRoleOutput>(response, this.errors.DetachTeamRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachTeamUser(params: DetachTeamUserInput): Promise<DetachTeamUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/user/:userId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachTeamUserResponse>(request);
                const parsedResponse = this.parseResponse<DetachTeamUserResponse, DetachTeamUserOutput>(response, this.errors.DetachTeamUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachTeamUserRole(params: DetachTeamUserRoleInput): Promise<DetachTeamUserRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/user/:userId/role/:roleId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachTeamUserRoleResponse>(request);
                const parsedResponse = this.parseResponse<DetachTeamUserRoleResponse, DetachTeamUserRoleOutput>(response, this.errors.DetachTeamUserRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachUserRole(params: DetachUserRoleInput): Promise<DetachUserRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/user/:userId/role/:roleId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachUserRoleResponse>(request);
                const parsedResponse = this.parseResponse<DetachUserRoleResponse, DetachUserRoleOutput>(response, this.errors.DetachUserRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    forgotPassword(params: ForgotPasswordInput): Promise<ForgotPasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/forgot",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ForgotPasswordResponse>(request);
                const parsedResponse = this.parseResponse<ForgotPasswordResponse, ForgotPasswordOutput>(response, this.errors.ForgotPasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getAccount(): Promise<GetAccountOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/account",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetAccountResponse>(request);
                const parsedResponse = this.parseResponse<GetAccountResponse, GetAccountOutput>(response, this.errors.GetAccountError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getGroup(params: GetGroupInput): Promise<GetGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/group/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetGroupResponse>(request);
                const parsedResponse = this.parseResponse<GetGroupResponse, GetGroupOutput>(response, this.errors.GetGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getGroupSCIM(params: GetGroupSCIMInput): Promise<GetGroupSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/Groups/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetGroupSCIMResponse>(request);
                const parsedResponse = this.parseResponse<GetGroupSCIMResponse, GetGroupSCIMOutput>(response, this.errors.GetGroupSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getPolicy(params: GetPolicyInput): Promise<GetPolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/policy/:policyId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        policyId: params["policyId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetPolicyResponse>(request);
                const parsedResponse = this.parseResponse<GetPolicyResponse, GetPolicyOutput>(response, this.errors.GetPolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getProvider(params: GetProviderInput): Promise<GetProviderOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/provider/:name",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        name: params["name"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetProviderResponse>(request);
                const parsedResponse = this.parseResponse<GetProviderResponse, GetProviderOutput>(response, this.errors.GetProviderError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getResourceTypes(): Promise<GetResourceTypesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/ResourceTypes",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetResourceTypesResponse>(request);
                const parsedResponse = this.parseResponse<GetResourceTypesResponse, GetResourceTypesOutput>(response, this.errors.GetResourceTypesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getRole(params: GetRoleInput): Promise<GetRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/role/:roleId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetRoleResponse>(request);
                const parsedResponse = this.parseResponse<GetRoleResponse, GetRoleOutput>(response, this.errors.GetRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getSchemas(): Promise<GetSchemasOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/Schemas",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetSchemasResponse>(request);
                const parsedResponse = this.parseResponse<GetSchemasResponse, GetSchemasOutput>(response, this.errors.GetSchemasError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getServiceProviderConfig(): Promise<GetServiceProviderConfigOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/ServiceProviderConfig",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetServiceProviderConfigResponse>(request);
                const parsedResponse = this.parseResponse<GetServiceProviderConfigResponse, GetServiceProviderConfigOutput>(response, this.errors.GetServiceProviderConfigError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getSigninConfiguration(params: GetSigninConfigurationInput): Promise<GetSigninConfigurationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/signin/configuration/:username",
                    headers: {},
                    pathParameters: {
                        username: params["username"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetSigninConfigurationResponse>(request);
                const parsedResponse = this.parseResponse<GetSigninConfigurationResponse, GetSigninConfigurationOutput>(response, this.errors.GetSigninConfigurationError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getTeam(params: GetTeamInput): Promise<GetTeamOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamResponse, GetTeamOutput>(response, this.errors.GetTeamError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getTeamGroup(params: GetTeamGroupInput): Promise<GetTeamGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/group/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamGroupResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamGroupResponse, GetTeamGroupOutput>(response, this.errors.GetTeamGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getTeamUser(params: GetTeamUserInput): Promise<GetTeamUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/user/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamUserResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamUserResponse, GetTeamUserOutput>(response, this.errors.GetTeamUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getUser(params: GetUserInput): Promise<GetUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetUserResponse>(request);
                const parsedResponse = this.parseResponse<GetUserResponse, GetUserOutput>(response, this.errors.GetUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getUserSCIM(params: GetUserSCIMInput): Promise<GetUserSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/Users/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetUserSCIMResponse>(request);
                const parsedResponse = this.parseResponse<GetUserSCIMResponse, GetUserSCIMOutput>(response, this.errors.GetUserSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    inviteTeamUser(params: InviteTeamUserInput): Promise<InviteTeamUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/user/:userId/invite",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<InviteTeamUserResponse>(request);
                const parsedResponse = this.parseResponse<InviteTeamUserResponse, InviteTeamUserOutput>(response, this.errors.InviteTeamUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    inviteUser(params: InviteUserInput): Promise<InviteUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/user/:userId/invite",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<InviteUserResponse>(request);
                const parsedResponse = this.parseResponse<InviteUserResponse, InviteUserOutput>(response, this.errors.InviteUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listGroupRoles(params: ListGroupRolesInput): Promise<ListGroupRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/group/:groupId/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListGroupRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListGroupRolesResponse, ListGroupRolesOutput>(response, this.errors.ListGroupRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listGroupTeams(params: ListGroupTeamsInput): Promise<ListGroupTeamsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/group/:groupId/teams",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListGroupTeamsResponse>(request);
                const parsedResponse = this.parseResponse<ListGroupTeamsResponse, ListGroupTeamsOutput>(response, this.errors.ListGroupTeamsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listGroupUsers(params: ListGroupUsersInput): Promise<ListGroupUsersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/group/:groupId/users",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListGroupUsersResponse>(request);
                const parsedResponse = this.parseResponse<ListGroupUsersResponse, ListGroupUsersOutput>(response, this.errors.ListGroupUsersError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listGroups(): Promise<ListGroupsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/groups",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListGroupsResponse>(request);
                const parsedResponse = this.parseResponse<ListGroupsResponse, ListGroupsOutput>(response, this.errors.ListGroupsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listGroupsSCIM(params: ListGroupsSCIMInput = {}): Promise<ListGroupsSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/Groups",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        startIndex: params["startIndex"],
                        count: params["count"],
                        filter: params["filter"],
                        excludedAttributes: params["excludedAttributes"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListGroupsSCIMResponse>(request);
                const parsedResponse = this.parseResponse<ListGroupsSCIMResponse, ListGroupsSCIMOutput>(response, this.errors.ListGroupsSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listPolicies(): Promise<ListPoliciesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/policies",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListPoliciesResponse>(request);
                const parsedResponse = this.parseResponse<ListPoliciesResponse, ListPoliciesOutput>(response, this.errors.ListPoliciesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listProviders(): Promise<ListProvidersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/providers",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListProvidersResponse>(request);
                const parsedResponse = this.parseResponse<ListProvidersResponse, ListProvidersOutput>(response, this.errors.ListProvidersError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listRoles(): Promise<ListRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListRolesResponse, ListRolesOutput>(response, this.errors.ListRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamGroupRoles(params: ListTeamGroupRolesInput): Promise<ListTeamGroupRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/group/:groupId/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamGroupRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamGroupRolesResponse, ListTeamGroupRolesOutput>(response, this.errors.ListTeamGroupRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamGroupUsers(params: ListTeamGroupUsersInput): Promise<ListTeamGroupUsersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/group/:groupId/users",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamGroupUsersResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamGroupUsersResponse, ListTeamGroupUsersOutput>(response, this.errors.ListTeamGroupUsersError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamGroups(params: ListTeamGroupsInput): Promise<ListTeamGroupsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/groups",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamGroupsResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamGroupsResponse, ListTeamGroupsOutput>(response, this.errors.ListTeamGroupsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamRoles(params: ListTeamRolesInput): Promise<ListTeamRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamRolesResponse, ListTeamRolesOutput>(response, this.errors.ListTeamRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamUserGroups(params: ListTeamUserGroupsInput): Promise<ListTeamUserGroupsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/user/:userId/groups",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamUserGroupsResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamUserGroupsResponse, ListTeamUserGroupsOutput>(response, this.errors.ListTeamUserGroupsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamUserRoles(params: ListTeamUserRolesInput): Promise<ListTeamUserRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/user/:userId/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamUserRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamUserRolesResponse, ListTeamUserRolesOutput>(response, this.errors.ListTeamUserRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeamUsers(params: ListTeamUsersInput): Promise<ListTeamUsersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/users",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamUsersResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamUsersResponse, ListTeamUsersOutput>(response, this.errors.ListTeamUsersError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listTeams(): Promise<ListTeamsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/teams",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamsResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamsResponse, ListTeamsOutput>(response, this.errors.ListTeamsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUserGroups(params: ListUserGroupsInput): Promise<ListUserGroupsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/groups",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserGroupsResponse>(request);
                const parsedResponse = this.parseResponse<ListUserGroupsResponse, ListUserGroupsOutput>(response, this.errors.ListUserGroupsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUserGroupsRoles(params: ListUserGroupsRolesInput): Promise<ListUserGroupsRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/groups/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserGroupsRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListUserGroupsRolesResponse, ListUserGroupsRolesOutput>(response, this.errors.ListUserGroupsRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUserGroupsTeams(params: ListUserGroupsTeamsInput): Promise<ListUserGroupsTeamsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/groups/teams",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserGroupsTeamsResponse>(request);
                const parsedResponse = this.parseResponse<ListUserGroupsTeamsResponse, ListUserGroupsTeamsOutput>(response, this.errors.ListUserGroupsTeamsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUserRoles(params: ListUserRolesInput): Promise<ListUserRolesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/roles",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserRolesResponse>(request);
                const parsedResponse = this.parseResponse<ListUserRolesResponse, ListUserRolesOutput>(response, this.errors.ListUserRolesError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUserTeams(params: ListUserTeamsInput): Promise<ListUserTeamsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/teams",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserTeamsResponse>(request);
                const parsedResponse = this.parseResponse<ListUserTeamsResponse, ListUserTeamsOutput>(response, this.errors.ListUserTeamsError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUsers(): Promise<ListUsersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/users",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUsersResponse>(request);
                const parsedResponse = this.parseResponse<ListUsersResponse, ListUsersOutput>(response, this.errors.ListUsersError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    listUsersSCIM(params: ListUsersSCIMInput = {}): Promise<ListUsersSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/Users",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        startIndex: params["startIndex"],
                        count: params["count"],
                        filter: params["filter"],
                        excludedAttributes: params["excludedAttributes"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUsersSCIMResponse>(request);
                const parsedResponse = this.parseResponse<ListUsersSCIMResponse, ListUsersSCIMOutput>(response, this.errors.ListUsersSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    patchGroupSCIM(params: PatchGroupSCIMInput): Promise<PatchGroupSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PATCH",
                    path: "/Groups/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        schemas: params["schemas"],
                        Operations: params["Operations"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<PatchGroupSCIMResponse>(request);
                const parsedResponse = this.parseResponse<PatchGroupSCIMResponse, PatchGroupSCIMOutput>(response, this.errors.PatchGroupSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    patchUserSCIM(params: PatchUserSCIMInput): Promise<PatchUserSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PATCH",
                    path: "/Users/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        schemas: params["schemas"],
                        Operations: params["Operations"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<PatchUserSCIMResponse>(request);
                const parsedResponse = this.parseResponse<PatchUserSCIMResponse, PatchUserSCIMOutput>(response, this.errors.PatchUserSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    acceptInvitation(params: AcceptInvitationInput): Promise<AcceptInvitationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/invitation/accept",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        password: params["password"],
                        secret: params["secret"],
                        account: params["account"],
                        user: params["user"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AcceptInvitationResponse>(request);
                const parsedResponse = this.parseResponse<AcceptInvitationResponse, AcceptInvitationOutput>(response, this.errors.AcceptInvitationError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    acceptUserInvitation(params: AcceptUserInvitationInput): Promise<AcceptUserInvitationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/user/invitation/accept",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        password: params["password"],
                        secret: params["secret"],
                        account: params["account"],
                        user: params["user"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AcceptUserInvitationResponse>(request);
                const parsedResponse = this.parseResponse<AcceptUserInvitationResponse, AcceptUserInvitationOutput>(response, this.errors.AcceptUserInvitationError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachGroupRole(params: AttachGroupRoleInput): Promise<AttachGroupRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/group/:groupId/role/:roleId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachGroupRoleResponse>(request);
                const parsedResponse = this.parseResponse<AttachGroupRoleResponse, AttachGroupRoleOutput>(response, this.errors.AttachGroupRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachGroupUser(params: AttachGroupUserInput): Promise<AttachGroupUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/group/:groupId/user/:userId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachGroupUserResponse>(request);
                const parsedResponse = this.parseResponse<AttachGroupUserResponse, AttachGroupUserOutput>(response, this.errors.AttachGroupUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachRolePolicy(params: AttachRolePolicyInput): Promise<AttachRolePolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/role/:roleId/policy/:policyId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        roleId: params["roleId"],
                        policyId: params["policyId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachRolePolicyResponse>(request);
                const parsedResponse = this.parseResponse<AttachRolePolicyResponse, AttachRolePolicyOutput>(response, this.errors.AttachRolePolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachTeamGroup(params: AttachTeamGroupInput): Promise<AttachTeamGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachTeamGroupResponse>(request);
                const parsedResponse = this.parseResponse<AttachTeamGroupResponse, AttachTeamGroupOutput>(response, this.errors.AttachTeamGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachTeamGroupRole(params: AttachTeamGroupRoleInput): Promise<AttachTeamGroupRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId/role/:roleId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachTeamGroupRoleResponse>(request);
                const parsedResponse = this.parseResponse<AttachTeamGroupRoleResponse, AttachTeamGroupRoleOutput>(response, this.errors.AttachTeamGroupRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachTeamGroupUser(params: AttachTeamGroupUserInput): Promise<AttachTeamGroupUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/group/:groupId/user/:userId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        groupId: params["groupId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachTeamGroupUserResponse>(request);
                const parsedResponse = this.parseResponse<AttachTeamGroupUserResponse, AttachTeamGroupUserOutput>(response, this.errors.AttachTeamGroupUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachTeamRole(params: AttachTeamRoleInput): Promise<AttachTeamRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/role/:roleId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachTeamRoleResponse>(request);
                const parsedResponse = this.parseResponse<AttachTeamRoleResponse, AttachTeamRoleOutput>(response, this.errors.AttachTeamRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachTeamUser(params: AttachTeamUserInput): Promise<AttachTeamUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/user/:userId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachTeamUserResponse>(request);
                const parsedResponse = this.parseResponse<AttachTeamUserResponse, AttachTeamUserOutput>(response, this.errors.AttachTeamUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachTeamUserRole(params: AttachTeamUserRoleInput): Promise<AttachTeamUserRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/team/:teamId/user/:userId/role/:roleId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachTeamUserRoleResponse>(request);
                const parsedResponse = this.parseResponse<AttachTeamUserRoleResponse, AttachTeamUserRoleOutput>(response, this.errors.AttachTeamUserRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    attachUserRole(params: AttachUserRoleInput): Promise<AttachUserRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/user/:userId/role/:roleId/attach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<AttachUserRoleResponse>(request);
                const parsedResponse = this.parseResponse<AttachUserRoleResponse, AttachUserRoleOutput>(response, this.errors.AttachUserRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    changePassword(params: ChangePasswordInput): Promise<ChangePasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/change",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        password: params["password"],
                        account: params["account"],
                        secret: params["secret"],
                        id: params["id"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ChangePasswordResponse>(request);
                const parsedResponse = this.parseResponse<ChangePasswordResponse, ChangePasswordOutput>(response, this.errors.ChangePasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createAccount(params: CreateAccountInput = {}): Promise<CreateAccountOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/account",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                        password: params["password"],
                        lastName: params["lastName"],
                        firstName: params["firstName"],
                        language: params["language"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateAccountResponse>(request);
                const parsedResponse = this.parseResponse<CreateAccountResponse, CreateAccountOutput>(response, this.errors.CreateAccountError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createGroup(params: CreateGroupInput): Promise<CreateGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/group",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateGroupResponse>(request);
                const parsedResponse = this.parseResponse<CreateGroupResponse, CreateGroupOutput>(response, this.errors.CreateGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createGroupSCIM(params: CreateGroupSCIMInput): Promise<CreateGroupSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/Groups",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        schemas: params["schemas"],
                        externalId: params["externalId"],
                        displayName: params["displayName"],
                        meta: params["meta"],
                        members: params["members"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateGroupSCIMResponse>(request);
                const parsedResponse = this.parseResponse<CreateGroupSCIMResponse, CreateGroupSCIMOutput>(response, this.errors.CreateGroupSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createPolicy(params: CreatePolicyInput): Promise<CreatePolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/policy",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                        description: params["description"],
                        statement: params["statement"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreatePolicyResponse>(request);
                const parsedResponse = this.parseResponse<CreatePolicyResponse, CreatePolicyOutput>(response, this.errors.CreatePolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createProvider(params: CreateProviderInput): Promise<CreateProviderOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/provider",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        issuer: params["issuer"],
                        name: params["name"],
                        type: params["type"],
                        idpUrl: params["idpUrl"],
                        certificate: params["certificate"],
                        metadata: params["metadata"],
                        status: params["status"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateProviderResponse>(request);
                const parsedResponse = this.parseResponse<CreateProviderResponse, CreateProviderOutput>(response, this.errors.CreateProviderError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createRole(params: CreateRoleInput): Promise<CreateRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/role",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                        description: params["description"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateRoleResponse>(request);
                const parsedResponse = this.parseResponse<CreateRoleResponse, CreateRoleOutput>(response, this.errors.CreateRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createTeam(params: CreateTeamInput = {}): Promise<CreateTeamOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/team",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                        description: params["description"],
                        domain: params["domain"],
                        config: params["config"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTeamResponse>(request);
                const parsedResponse = this.parseResponse<CreateTeamResponse, CreateTeamOutput>(response, this.errors.CreateTeamError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createToken(params: CreateTokenInput): Promise<CreateTokenOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/token",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                        password: params["password"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTokenResponse>(request);
                const parsedResponse = this.parseResponse<CreateTokenResponse, CreateTokenOutput>(response, this.errors.CreateTokenError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createUser(params: CreateUserInput = {}): Promise<CreateUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/user",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        username: params["username"],
                        password: params["password"],
                        lastName: params["lastName"],
                        firstName: params["firstName"],
                        language: params["language"],
                        status: params["status"],
                        authenticationMode: params["authenticationMode"],
                        label: params["label"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateUserResponse>(request);
                const parsedResponse = this.parseResponse<CreateUserResponse, CreateUserOutput>(response, this.errors.CreateUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createUserSCIM(params: CreateUserSCIMInput): Promise<CreateUserSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/Users",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        schemas: params["schemas"],
                        externalId: params["externalId"],
                        userName: params["userName"],
                        active: params["active"],
                        emails: params["emails"],
                        meta: params["meta"],
                        name: params["name"],
                        displayName: params["displayName"],
                        locale: params["locale"],
                        groups: params["groups"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateUserSCIMResponse>(request);
                const parsedResponse = this.parseResponse<CreateUserSCIMResponse, CreateUserSCIMOutput>(response, this.errors.CreateUserSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createUserToken(params: CreateUserTokenInput): Promise<CreateUserTokenOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/user/:userId/token",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        tokenDuration: params["tokenDuration"],
                        refreshTokenDuration: params["refreshTokenDuration"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateUserTokenResponse>(request);
                const parsedResponse = this.parseResponse<CreateUserTokenResponse, CreateUserTokenOutput>(response, this.errors.CreateUserTokenError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteAccount(): Promise<DeleteAccountOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/account",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteAccountResponse>(request);
                const parsedResponse = this.parseResponse<DeleteAccountResponse, DeleteAccountOutput>(response, this.errors.DeleteAccountError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteGroup(params: DeleteGroupInput): Promise<DeleteGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/group/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteGroupResponse>(request);
                const parsedResponse = this.parseResponse<DeleteGroupResponse, DeleteGroupOutput>(response, this.errors.DeleteGroupError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteGroupSCIM(params: DeleteGroupSCIMInput): Promise<DeleteGroupSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/Groups/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteGroupSCIMResponse>(request);
                const parsedResponse = this.parseResponse<DeleteGroupSCIMResponse, DeleteGroupSCIMOutput>(response, this.errors.DeleteGroupSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deletePolicy(params: DeletePolicyInput): Promise<DeletePolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/policy/:policyId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        policyId: params["policyId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeletePolicyResponse>(request);
                const parsedResponse = this.parseResponse<DeletePolicyResponse, DeletePolicyOutput>(response, this.errors.DeletePolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteProvider(params: DeleteProviderInput): Promise<DeleteProviderOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/provider/:issuer",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        issuer: params["issuer"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteProviderResponse>(request);
                const parsedResponse = this.parseResponse<DeleteProviderResponse, DeleteProviderOutput>(response, this.errors.DeleteProviderError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteRole(params: DeleteRoleInput): Promise<DeleteRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/role/:roleId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteRoleResponse>(request);
                const parsedResponse = this.parseResponse<DeleteRoleResponse, DeleteRoleOutput>(response, this.errors.DeleteRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteTeam(params: DeleteTeamInput): Promise<DeleteTeamOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/team/:teamId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteTeamResponse>(request);
                const parsedResponse = this.parseResponse<DeleteTeamResponse, DeleteTeamOutput>(response, this.errors.DeleteTeamError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteUser(params: DeleteUserInput): Promise<DeleteUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/user/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteUserResponse>(request);
                const parsedResponse = this.parseResponse<DeleteUserResponse, DeleteUserOutput>(response, this.errors.DeleteUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    deleteUserSCIM(params: DeleteUserSCIMInput): Promise<DeleteUserSCIMOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/Users/:userId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteUserSCIMResponse>(request);
                const parsedResponse = this.parseResponse<DeleteUserSCIMResponse, DeleteUserSCIMOutput>(response, this.errors.DeleteUserSCIMError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachGroupRole(params: DetachGroupRoleInput): Promise<DetachGroupRoleOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/group/:groupId/role/:roleId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                        roleId: params["roleId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachGroupRoleResponse>(request);
                const parsedResponse = this.parseResponse<DetachGroupRoleResponse, DetachGroupRoleOutput>(response, this.errors.DetachGroupRoleError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachGroupUser(params: DetachGroupUserInput): Promise<DetachGroupUserOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/group/:groupId/user/:userId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachGroupUserResponse>(request);
                const parsedResponse = this.parseResponse<DetachGroupUserResponse, DetachGroupUserOutput>(response, this.errors.DetachGroupUserError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    detachRolePolicy(params: DetachRolePolicyInput): Promise<DetachRolePolicyOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/role/:roleId/policy/:policyId/detach",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        roleId: params["roleId"],
                        policyId: params["policyId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DetachRolePolicyResponse>(request);
                const parsedResponse = this.parseResponse<DetachRolePolicyResponse, DetachRolePolicyOutput>(response, this.errors.DetachRolePolicyError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }
}
